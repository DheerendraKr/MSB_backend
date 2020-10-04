/**
 * 
 */
package com.msb.backend.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.msb.backend.model.request.LoginRequestModel;
import com.msb.backend.model.response.LoginResponseModel;
import com.msb.backend.model.response.UserResponseModel;
import com.msb.backend.services.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * @author dheerendra
 *
 */
public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private UserService usersService;
	
	private Environment environment;
	
	private final long TOKEN_EXP_TIME;
	
	private final String TOKEN_SECRET;
	
	private ObjectMapper mapper = new ObjectMapper();
	
	public AuthenticationFilter(UserService usersService, 
			Environment environment,
			AuthenticationManager authenticationManager
			) {
		this.usersService = usersService;
		this.environment = environment;
		super.setAuthenticationManager(authenticationManager);
		this.TOKEN_EXP_TIME = Long.parseLong(environment.getProperty("token.expiration_time"));
		this.TOKEN_SECRET = environment.getProperty("token.secret");
	}
	
	@Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
  
            LoginRequestModel creds = new ObjectMapper()
                    .readValue(req.getInputStream(), LoginRequestModel.class);
            
            return getAuthenticationManager().authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getMemberId(),
                            creds.getPassword(),
                            new ArrayList<>())
            );
            
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
	
	@Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException, ServletException {
    	String userName = ((User) auth.getPrincipal()).getUsername();
    	UserResponseModel userDetails = usersService.getUserDetailsByEmail(userName);
    	
        String token = Jwts.builder()
                .setSubject(userDetails.getMemberId())
                .setExpiration(new Date(System.currentTimeMillis() + this.TOKEN_EXP_TIME))
                .signWith(SignatureAlgorithm.HS512, this.TOKEN_SECRET )
                .compact();
        res.addHeader("userId", userDetails.getMemberId());
        res.addHeader("content-type", "application/json");
        res.getWriter().write(mapper.writeValueAsString(createLoginResponseModel(userDetails, token)));
        res.getWriter().flush();
        res.getWriter().close();
    } 
	
	private LoginResponseModel createLoginResponseModel(final UserResponseModel user, final String token) {
		LoginResponseModel response = new LoginResponseModel();
		response.setUserName(user.getFirstName()+" "+user.getLastName());
		response.setAccess_token(token);
		response.setExpires_in(this.TOKEN_EXP_TIME);
		response.setToken_type(environment.getProperty("authorization.token.header.prefix"));
		response.setRoles(user.getUserRoles().stream().collect(Collectors.toList()));
		response.setRefresh_token(null);
		return response;
	}
    
	
}

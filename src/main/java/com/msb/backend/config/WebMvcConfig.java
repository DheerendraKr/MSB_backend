/**
 * 
 */
package com.msb.backend.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author dheer
 *
 */
@Controller
public class WebMvcConfig {

	@RequestMapping(value = "/{[path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    } 
	
}

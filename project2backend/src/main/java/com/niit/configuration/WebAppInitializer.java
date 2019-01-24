package com.niit.configuration;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

//Similar to web.xml file. WebAppInitializer will get loaded automatically and initialize DispatcherServlet
public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	public WebAppInitializer(){
		System.out.println("WebAppInitializer class is instantiated... and DispatcherServer is initialized");
	}
	protected Class<?>[] getRootConfigClasses() {
	
		return new Class[]{WebAppConfig.class};
	}

	
	protected Class<?>[] getServletConfigClasses() {
	
		return null;
	}

	protected String[] getServletMappings() {
	
		return new String[]{"/"};//url pattern - <servlet-mapping> </servlet-mapping>
	}

}



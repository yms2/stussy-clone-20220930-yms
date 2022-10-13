package com.stussy.stussyclone20220930yms.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
//config는 설정 @Configuration넣어줘야됨

//    @Bean
//    public BCryptPasswordEncoder passwordEncoder(){
//
//    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.httpBasic().disable();
        http.authorizeRequests()
                .antMatchers("/account/mypage","/index")
                .authenticated()
                //인증을 거쳐라
                .anyRequest()
                .permitAll()
                //권한을 허용하라
                .and()
                //그리고
                .formLogin()
                //폼로그인에 대한 설정
                .loginPage("/account/login")
                //페이지주소.
                .loginProcessingUrl("/account/login")
                //로그인 서비스 포스트요청
                .defaultSuccessUrl("/index");



    }


}

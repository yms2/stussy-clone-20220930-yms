package com.stussy.stussyclone20220930yms.controller;

import com.stussy.stussyclone20220930yms.dto.RegisterReqDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AccountController {

    @GetMapping ("/account/login")
    public String login(){
        return "account/login";
    }
    @GetMapping("/account/register")
    public String register(RegisterReqDto registerReqDto){
        System.out.println();
        return "account/register";
    }
}

package com.stussy.stussyclone20220930yms.dto;

import lombok.Data;

@Data
public class RegisterReqDto {

    private String lastName;
    private String firstName;
    private String email;
    private String password;
}

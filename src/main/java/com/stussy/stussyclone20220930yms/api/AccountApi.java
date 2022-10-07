package com.stussy.stussyclone20220930yms.api;

import com.stussy.stussyclone20220930yms.aop.annotation.LogAspect;
import com.stussy.stussyclone20220930yms.dto.CMRespDto;
import com.stussy.stussyclone20220930yms.dto.RegisterReqDto;
import com.stussy.stussyclone20220930yms.dto.validation.ValidationSequence;
import com.stussy.stussyclone20220930yms.exception.CustomValidationException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/api/account")
@RestController
public class AccountApi {

    @LogAspect
    @PostMapping("/register")
    public ResponseEntity<?> register(@Validated(ValidationSequence.class) @RequestBody RegisterReqDto registerReqDto, BindingResult bindingResult){
        return ResponseEntity.ok().body(new CMRespDto<>("회원가입 성공", registerReqDto));
    }
}

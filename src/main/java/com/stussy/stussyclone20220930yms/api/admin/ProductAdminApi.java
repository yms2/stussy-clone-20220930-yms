package com.stussy.stussyclone20220930yms.api.admin;

import com.stussy.stussyclone20220930yms.aop.annotation.LogAspect;
import com.stussy.stussyclone20220930yms.aop.annotation.ValidAspect;
import com.stussy.stussyclone20220930yms.dto.CMRespDto;
import com.stussy.stussyclone20220930yms.dto.admin.ProductRegisterReqDto;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
@RestController
@RequestMapping("/api/admin")
public class ProductAdminApi {

    @LogAspect
    @ValidAspect
    @PostMapping("/product")
    public ResponseEntity<?> registerProductMst(@Validated @RequestBody ProductRegisterReqDto productRegisterReqDto,
                                                BindingResult bindingResult) {

        return ResponseEntity.created(null)
                .body(new CMRespDto<>("Register Successful", null));
    }
        @GetMapping("/product/register")
        public ResponseEntity<?> getCategoryList() {
            return ResponseEntity.ok().body(new CMRespDto<>("get successfully",null));
        }
    }

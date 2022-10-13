package com.stussy.stussyclone20220930yms.dto;

import com.stussy.stussyclone20220930yms.domain.User;
import com.stussy.stussyclone20220930yms.dto.validation.ValidationGroups;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class RegisterReqDto {
    //이름이면 3글자이상 안되고 한글자이상이어야된다. 무조건 한글아어야함.
    @Size(min = 1, max = 3, message = "이름은 3자 이하여야합니다", groups = ValidationGroups.SizeGroup.class)
    @NotBlank(message = "이름을 비워둘 수 없습니다", groups = ValidationGroups.NotBlankGroup.class)
    @Pattern(regexp = "^[가-횧]*$", message = "한글만 입력 가능합니다", groups = ValidationGroups.PatternCheckGroup.class)
    private String lastName;

    @Size(min = 1, max = 2, message = "성은 2자 이하여야 합니다", groups = ValidationGroups.SizeGroup.class)
    @NotBlank(message = "성을 비워두지마세요", groups = ValidationGroups.NotBlankGroup.class)
    @Pattern(regexp = "^[가-횧]*$", message = "한글만 입력가능합니다", groups = ValidationGroups.PatternCheckGroup.class)
    private String firstName;

    @NotBlank(message = "이메일은 비워둘 수 없습니다", groups = ValidationGroups.NotBlankGroup.class)
    @Email
    private String email;
    @NotBlank(message = "비밀번호는 비워둘 수 없습니다", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 8, max = 16, message = "비밀번호는 8자부터 16자까지 입력하여야 합니다", groups = ValidationGroups.SizeGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^*_])[a-zA-Z\\d-~!@#$%^*_]*$",
            message = "비밀번호는 특수기호,영문 숫자를 모두 포함해야합니다", groups = ValidationGroups.PatternCheckGroup.class)
    private String password;

    public User toEntity() {
        return User.builder()
                .email(email)
                .password(new BCryptPasswordEncoder().encode(password))
                .name(firstName + lastName)
                .role_id(1)
                .build();
    }
}
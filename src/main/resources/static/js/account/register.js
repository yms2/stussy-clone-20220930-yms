const registerForButton = document.querySelector(".login-button");

registerForButton.onclick =() =>{
    const accountInputs = document.querySelectorAll(".login-input");

    let user = {
        lastName: accountInputs[0].value,
        firstName : accountInputs[1].value,
        email: accountInputs[2].value,
        password: accountInputs[3].value
    }

    let ajaxOption = {
        async: false,                //필수
        type: "post",               //필수
        url:"/api/account/register",//필수
        data: user,                 //전송할 데이터가 있으면
        dataType:"json",            //json외 text등을 사용할 수 있지만  json사용함
        success: (response) => {     //성공시에 실행될 메소드
            alert("회원가입 요청 성공")
        },
        error: (error) => {          //실패시에 실행될 메소드
            alert("회원가입 요청 실패")
        }
    }

    $.ajax(ajaxOption);   
}
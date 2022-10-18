const RegisterEventService = {
    getCategorySelectObj: () => document.querySelectorAll(".product-inputs")[0],
    getNameInputObj: () => document.querySelectorAll(".product-inputs")[1],
    getPriceInputObj: () => document.querySelectorAll(".product-inputs")[2],
    getRegistInfo: ()=>document.querySelector(".regist-info"),
    getRegisterButtonObj: ()=>document.querySelector(".regist-button"),
    getInfoTextareaObjs: ()=> document.querySelectorAll(".product-inputs"),

    init: function() {
        //초기상태는 상품명과 가격명의 박스가 비활성화 상태를 의미한다.
        this.getNameInputObj().disabled = true;
        this.getPriceInputObj().disabled = true;
        this.getRegisterButtonObj().disabled = true;
    },

    addCategorySelectEvent: function() {
        this.getCategorySelectObj().onchange = () => {
            //onchange 상자의 상태가 변화했을 때
            if(this.getCategorySelectObj().value != "none"){
                //상품종류카테고리의 상태가 none(아무것도 선택이 되지 않았을 때)이 아니면 실행된다.
                this.getNameInputObj().disabled = false;
                //상품명의 카테고리가 작성할 수 있도록 설정된다.
            }else{
                this.getNameInputObj().disabled = true;
                //위의 조건에 맞지 않으면 작성 안되게 된다.
            }
            RegisterObj.category = this.getCategorySelectObj().value;
        }
    },
    addNameInputEvent: function() {
        this.getNameInputObj().onkeyup = () => {
            //onkeyup 상품명의 박스에서 키를 땠을 떄
            if(this.getNameInputObj().value.length != 0){
                //박스안에 들어있는 내용이 길이가 0 이 아닐때 실행된다.
                this.getPriceInputObj().disabled = false;
                //위의 조건에 해당하면 가격의 박스가 활성화 된다.
                
            }else{
                this.getPriceInputObj().disabled = true;
                
                //조건에 해당되지 않으면 박스가 비활성화 된다.
            }
            RegisterObj.name = this.getNameInputObj().value;
        }
    },
    addPriceInputEvent: function() {
        this.getPriceInputObj().onkeyup = () => {
            if(this.getPriceInputObj().value.length != 0){
                this.getRegistInfo().disabled = false;
                this.getRegistInfo().classList.remove("regist-info-invisible")
            }else{
                this.getRegisterButtonObj().disabled = true;
                this.getRegistInfo().classList.add("regist-info-invisible")
            }
            RegisterObj.price = this.getPriceInputObj().value;
        }
    },
    addRegistButtonEvent: function() {
        this.getRegisterButtonObj().onclick = () => {
            RegisterObj.simpleINfo = this.getInfoTextareaObjs()[3].value;
            RegisterObj.detailInfo = this.getInfoTextareaObjs()[4].value;
            RegisterObj.optionInfo = this.getInfoTextareaObjs()[5].value;
            RegisterObj.managementInfo = this.getInfoTextareaObjs()[6].value;
            RegisterObj.shippingInfo = this.getInfoTextareaObjs()[7].value;
            
            console.log(RegisterObj);
            
            RegisterRequestService.createProductRequest();
        }
    },
}

const RegisterRequestService = {
    createProductRequest: () =>{
        let responseResult = null;

        $.ajax({
            async:false,
            type:"post",
            url: "/api/admin/product",
            contentType: "application/json",
            data: JSON.stringify(RegisterObj),
            dataType: "json",
            success:(response)=>{
                responseResult = response.data;
            },
            error:(error)=>{
                console.log(error);
            }
        })
        return responseResult;
    }
}
//초기값은 null로 설정하고 값을 입력하면 들어간다.
const RegisterObj = {
    category:null,
    name:null,
    price:null,
    simpleINfo:null,
    detailInfo:null,
    optionInfo:null,
    managementInfo:null,
    shippingInfo:null
}

const ProductRegistration = {
    initRegisterEvent: ()=>{
        RegisterEventService.init();
        RegisterEventService.addCategorySelectEvent();
        RegisterEventService.addNameInputEvent();
        RegisterEventService.addPriceInputEvent();
        RegisterEventService.addRegistButtonEvent();

    }
}

window.onload = () =>{
    //onload 웹페이지에 로드가 완료되었을 때
    ProductRegistration.initRegisterEvent();
}
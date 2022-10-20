<<<<<<< HEAD
class ProductMst{
  #category;
  #name;
  #price;
  #simpleInfo;
  #detailInfo;
  #optionInfo;
  #managementInfo;
  #shippingInfo;

  constructor(category,name,price,simpleInfo,detailInfo,optionInfo,managementInfo,shippingInfo){
    this.#category = category; 
    this.#name =name ; 
    this.#price = price; 
    this.#simpleInfo = simpleInfo; 
    this.#detailInfo = detailInfo; 
    this.#optionInfo = optionInfo; 
    this.#managementInfo = managementInfo; 
    this.#shippingInfo = shippingInfo; 
  }

  getcategory() {return this.#category;}
  setcategory(category) {this.#category =category ;}

  getname() {return this.#name;}
  setname(name) {this.#name = name ;}

  getprice() {return this.#price;}
  setprice(price) {this.#price = price;}

  getsimpleInfo() {return this.#simpleInfo;}
  setsimpleInfo(simpleInfo) {this.#simpleInfo = simpleInfo ;}

  getdetailInfo() {return this.#detailInfo;}
  setdetailInfo(detailInfo) {this.#detailInfo = detailInfo;}

  getoptionInfo() {return this.#optionInfo;}
  setoptionInfo(optionInfo) {this.#optionInfo = optionInfo;}

  getmanagementInfo() {return this.#managementInfo;}
  setmanagementInfo(managementInfo) {this.#managementInfo = managementInfo ;}

  getshippingInfo() {return this.#shippingInfo;}
  setshippingInfo(shippingInfo) {this.#shippingInfo = shippingInfo ;}

  getObject(){
    const obj = {
      category: this.#category,
      name: this.#name,
      price: this.#price,
      simpleInfo: this.#simpleInfo,
      detailInfo: this.#detailInfo,
      optionInfo: this.#optionInfo,
      managementInfo: this.#managementInfo,
      shippingInfo: this.#shippingInfo
    }
    return obj;
  }
}

class CommonApi{
  getCategoryList(){
=======
// 상품종류 선택 시 상품명 입력 가능하게 하는 js코드
const RegisterEventService = {
  getCategorySelectObj: () => document.querySelectorAll(".product-inputs")[0],
  getNameInputObj: () => document.querySelectorAll(".product-inputs")[1],
  getPriceInputObj: () => document.querySelectorAll(".product-inputs")[2],
  getRegistInfo: () => document.querySelector(".regist-info"),
  getRegistButtonObj: () => document.querySelector(".regist-button"),
  getInfoTextareaObjs: () => document.querySelectorAll(".product-inputs"),

  // init은 생성자의 뜻이며 자바에서 사용하는 this를 사용하기 위해선 익명클래스로 만들어 사용 해야한다.
  init: function() {
    this.getNameInputObj().disabled = true;
    this.getPriceInputObj().disabled = true;
    this.getRegistButtonObj().disabled = true;
  },

  addCategorySelectEvent: function() {
    this.getCategorySelectObj().onchange = () => {
      if(this.getCategorySelectObj().value != "none") {
        this.getNameInputObj().disabled = false;
      }else {
        this.getNameInputObj().disabled = true;
      }
      RegisterObj.category = this.getCategorySelectObj().value;
    }
  },
  addNameInputEvent: function() {
    this.getNameInputObj().onkeyup = () => {
      if(this.getNameInputObj().value.length != 0) {
        this.getPriceInputObj().disabled = false;
      }else {
        this.getPriceInputObj().disabled = true;
      }
      RegisterObj.name = this.getNameInputObj().value;
    }
  },
  addPriceInputEvent: function() {
    this.getPriceInputObj().onkeyup = () => { 
      if(this.getPriceInputObj().value.length != 0) {
      this.getRegistButtonObj().disabled = false;
      this.getRegistInfo().classList.remove("regist-info-invisible");
    }else {
      this.getRegistButtonObj().disabled = true;
      this.getRegistInfo().classList.add("regist-info-invisible");
    }
     RegisterObj.price = this.getPriceInputObj().value;
    }
  },
  addRegistButtonEvent: function() {
    this.getRegistButtonObj().onclick = () => {
      RegisterObj.simpleInfo = this.getInfoTextareaObjs()[3].value;
      RegisterObj.detailInfo = this.getInfoTextareaObjs()[4].value;
      RegisterObj.optionInfo = this.getInfoTextareaObjs()[5].value;
      RegisterObj.managementInfo = this.getInfoTextareaObjs()[6].value;
      RegisterObj.shippingInfo = this.getInfoTextareaObjs()[7].value;

      console.log(RegisterObj);

      RegisterRequestService.createProductRequest();
    }
  }
}

const RegisterRequestService = {
  createProductRequest: () => {
>>>>>>> aa8145d12c9bccb4ef5b272c3df8267d5f22979c
    let responseResult = null;

    $.ajax({
      async: false,
<<<<<<< HEAD
      type: "get",
      url: "/api/admin/product/category",
      dataType : "json",
      success : (response) => {
        responseResult = response.data;
      },
      error : (error) => {
        console.log(error);
      }
    });

    return responseResult;
  }
}

class RegisterApi{
  createProductRequest(productMst){
    let responseResult = null;

    $.ajax({
      async: false,
      type: "post",
      url: "/api/admin/product",
      contentType: "application/json",
      data: JSON.stringify(productMst),
=======
      type: "post",
      url: "/api/admin/product",
      contentType: "application/json",
      data: JSON.stringify(RegisterObj),
>>>>>>> aa8145d12c9bccb4ef5b272c3df8267d5f22979c
      dataType: "json",
      success: (reponse) => {
        responseResult = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });

    return responseResult;
<<<<<<< HEAD
  }
}
class RegisterEventService{
  

  #categorySelectObj;
  #nameInputObj;
  #priceInputObj;
  #registButtonObj;
  #infoTextareaObjs;

  constructor(){
      this.#categorySelectObj = document.querySelectorAll(".product-inputs")[0];
      this.#nameInputObj = document.querySelectorAll(".product-inputs")[1];
      this.#priceInputObj = document.querySelectorAll(".product-inputs")[2];
      this.#registButtonObj = document.querySelector(".regist-button");
      this.#infoTextareaObjs = document.querySelectorAll(".product-inputs");

      this.init();

      this.addCategorySelectEvent();
      this.addNameInputEvent();
      this.addPriceInputEvent();
      this.addRegistButtonEvent();
  }

  init(){
    this.#nameInputObj.disabled = true;
    this.#priceInputObj.disabled = true;
    this.#registButtonObj.disabled = true;
  }
  addCategorySelectEvent () {
    this.#categorySelectObj.onchange = () => {

      if(this.#categorySelectObj.value != "none") {
        this.#nameInputObj.disabled = false;

      }else {
        this.#nameInputObj.disabled = true;
      }
    }
}
  addNameInputEvent () {
    this.#nameInputObj.onkeyup = () => {

      if(this.#nameInputObj.value.length != 0) {
        this.#priceInputObj.disabled = false;

      }else {
        this.#priceInputObj.disabled = true;
      }
    }
  }
  addPriceInputEvent () {
    this.#priceInputObj.onkeyup = () => { 
      const registInfo = document.querySelector(".regist-info")

      if(this.#priceInputObj.value.length != 0) {
      this.#registButtonObj.disabled = false;
      registInfo.classList.remove("regist-info-invisible");

    }else {
      this.#registButtonObj.disabled = true;
      registInfo.classList.add("regist-info-invisible");
      }
    }
  }
  addRegistButtonEvent () {
    this.#registButtonObj.onclick = () => {
      const category = this.#categorySelectObj.value;
      const name = this.#nameInputObj.value;
      const price = this.#priceInputObj.value;
      const simpleInfo = this.#infoTextareaObjs[3].value;
      const detailInfo = this.#infoTextareaObjs[4].value;
      const optionInfo = this.#infoTextareaObjs[5].value;
      const managementInfo = this.#infoTextareaObjs[6].value;
      const shippingInfo = this.#infoTextareaObjs[7].value;

      const productMst = new ProductMst(
        category, name, price, simpleInfo, detailInfo, optionInfo, 
        managementInfo, shippingInfo)

      console.log(productMst.getObject());

      const registerApi = new RegisterApi(); 
      if(registerApi.createProductRequest(productMst.getObject())){
        alert("상품 등록 완료");
        location.reload();
      } 
      }
    }
}

class RegisterService {
  static #instance = null;

  constructor(){
   
  }

  static getInstance() {
    if(this.#instance == null){
      this.#instance = new RegisterService();
    }
    return this.#instance;
  }
  loadRegister() {
    
  }
  getCategoryList(){
    const commonApi = new CommonApi();
    const productCategoryList = commonApi.getCategoryList();

    const productCategory = document.querySelector(".product-category");
    productCategory.innerHTML = `<option value="none">상품 종류</option>`;

    productCategoryList.forEach(category => {
      productCategory.innerHTML += `
      <option value="${category.id}">${category.name}</option>
      `;
    })
  }
  setRegisterHeaderEvent(){
    new RegisterEventService();
  }
}

window.onload = () => {
  RegisterService.getInstance().getCategoryList();
  RegisterService.getInstance().setRegisterHeaderEvent();
=======

  }
}

const RegisterObj = {
    category: null,
    name: null,
    price: null,
    simpleInfo: null,
    detailInfo: null,
    optionInfo: null,
    managementInfo: null,
    shippingInfo: null
}

const ProductRegistration = {
  initRegisterEvent: () => {
    RegisterEventService.init();
    RegisterEventService.addCategorySelectEvent();
    RegisterEventService.addNameInputEvent();
    RegisterEventService.addPriceInputEvent();
    RegisterEventService.addRegistButtonEvent();
  }
}

window.onload = () => {
  ProductRegistration.initRegisterEvent();
>>>>>>> aa8145d12c9bccb4ef5b272c3df8267d5f22979c
}

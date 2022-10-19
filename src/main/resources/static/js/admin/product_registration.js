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



class RegisterApi{
  createProductRequest(productMst){
    let responseResult = null;

    $.ajax({
      async: false,
      type: "post",
      url: "/api/admin/product",
      contentType: "application/json",
      data: JSON.stringify(RegisterObj),
      dataType: "json",
      success: (reponse) => {
        responseResult = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });

    return responseResult;
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
      registerApi.createProductRequest(registerApi.getObject());
      
      }
    }
}

class RegisterService {
  static #instance = null;

  constructor(){
    this.loadRegister();
  }

  static getInstance() {
    if(this.#instance == null){
      this.#instance = new RegisterService();
    }
    return this.#instance;
  }
  loadRegister() {
    
  }
  setRegisterHeaderEvent(){
    new RegisterEventService();
  }
}

window.onload = () => {
  RegisterService.getInstance().setRegisterHeaderEvent();
}

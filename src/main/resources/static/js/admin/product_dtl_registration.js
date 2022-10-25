class CommonApi {

    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new CommonApi();
        }
        return this.#instance;
    }

    getProductMstList(){
        let responseData = null;
        $.ajax({
            anync : false,
            type : "get",
            url : "/api/admin/option/product/mst",
            dataType : "json",
            success : (response) => {
                responseData = response.data;
            },
            error : (error) => {
                console.log(error);
            }
        });
        return responseData;
    }

}

class Option{

    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new CommonApi();
        }
        return this.#instance;
    }
    setProductMstSelectOptions() {
        const pdtMstSelect = document.querySelector(".product-select");
        CommonApi.getInstance().getProductMstList().forEach(product =>{
            pdtMstSelect.innerHTML += `
                <option value="${product.id}">(${product.category})${product.name}</option>
            `
        });
    }
}

window.onload = () =>{
    Option.getInstance().setProductMstSelectOptions();
}
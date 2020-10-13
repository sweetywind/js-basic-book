var check = document.querySelector("#shippingInfo");
check.addEventListener("click", function (){
    if(check.checked == true){
        document.querySelector("#billingName").value = document.querySelector("#shippingName").value;
        document.querySelector("#billingTel").value = document.querySelector("#shippingTel").value;
        document.querySelector("#billingAddr").value = document.querySelector("#shippingAddr").value;
    }else{
        document.querySelector("shippingName").value="";
        document.querySelector("shippingTel").value="";
        document.querySelector("shippingAddr").value="";
    }
});
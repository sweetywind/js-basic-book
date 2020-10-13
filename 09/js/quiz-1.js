var price = 24000;

var total = document.querySelector("#total");
total.value = price + "원";

var options = document.querySelectorAll(".checkbx");

for(var i = 0;i < options.length;i++){
    options[i].onclick = function(){
        if(this.checked == true){
            price += parseInt(this.value);
        }else{
            price -= parseInt(this.value);
        }
        total.value = price + "원";
    };
}
var bigPic = document.querySelector("#prod-pic > img");
var smallPic = document.querySelectorAll(".small");

for(var i = 0;i < smallPic.length;i++){
    smallPic[i].addEventListener("click", showBig);
}

function showBig(){
    var newPic = this.src;
    //bigPic.setAttribute("src", newPic);
    bigPic.src = newPic;
}
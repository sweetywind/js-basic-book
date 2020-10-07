var coverImage = document.querySelector("#cover");
coverImage.onclick = function (){
    coverImage.style.border = "5px black solid";
};
coverImage.onmouseout = function(){
    coverImage.style.border ="";
};
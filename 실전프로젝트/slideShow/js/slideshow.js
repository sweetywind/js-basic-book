var imgs = document.querySelectorAll("#container > img");
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");
var current = 0;

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

showSlide(current);
function showSlide(n){
    for(var i = 0;i < imgs.length;i++){
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}

function prevSlide(){
    if(current > 0){
        current -= 1;
    }else{
        current = imgs.length - 1;
    }
    showSlide(current);
}

function nextSlide(){
    if(current < imgs.length - 1){
        current += 1;
    }else{
        current = 0;
    }
    showSlide(current);
}
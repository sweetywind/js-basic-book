var count = 0;
var randomNum = Math.floor(Math.random() * 100) + 1;
document.querySelector("#try").onkeypress = function (e){
    if(e.keyCode == 13 || e.which == 13){
        find();
        return false;
    }
};


function find(){
    var userNum = document.querySelector("#try").value;
    var output = document.querySelector("#display");
    var counter  = document.querySelector("#counter");
    
    if(userNum >= 1 && userNum <= 100){
        if(randomNum > userNum){
            output.innerHTML = "UP!";
        }else if(randomNum < userNum){
            output.innerHTML = "Down!";
        }else{
            output.innerHTML = "<span style='color:red'>정답입니다!</span>";
        }
    }else{
        alert("1에서 100사이에 숫자만 입력하세요.");
    }
    document.querySelector("#try").value ="";
    count += 1;
    counter.innerHTML = "시도회수 : " + count + " 회";
}
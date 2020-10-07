var num1 = parseInt(prompt("비교할 첫 번째 숫자"));
var num2 = parseInt(prompt("비교할 두 번째 숫자"));

compare(num1,num2);

function compare(a,b){
    if(a < b){
        var result1 = num1 + "(이)가 " + num2 + "보다 작습니다.";
        alert(result1);
    }else if(a == b){
        var result2 = num1 + "와(과) " + num2 + "은(는) 같습니다.";
        alert(result2);
    }
    else{
        var result3 = num1 + "(이)가 " + num2 + "보다 큽니다.";
        alert(result3);
    }
}


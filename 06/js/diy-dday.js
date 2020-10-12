var now  = new Date();
var firstDay = new Date("2017-10-21");

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedDay = Math.round((toNow - toFirst)/(24*60*60*1000));


document.querySelector("#accent").innerText = passedDay;

calDate(100);
calDate(200);
calDate(365);
calDate(500);

function calDate(days){
    var future = toFirst + days*(24*60*60*1000);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth()+1;
    var date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "년" + month +"월" + date +"일"; 
}
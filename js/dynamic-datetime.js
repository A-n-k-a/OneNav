var i=0;
function myDate(){
    var now=new Date();
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var day=now.getDate();
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();

    document.getElementById("div_time").innerHTML = `<p>${year}年${month}月${day}日${hours}:${minutes}:${seconds}</p>`;
}
setInterval(myDate,1000);
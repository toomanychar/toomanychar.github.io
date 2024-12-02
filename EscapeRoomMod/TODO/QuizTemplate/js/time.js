/* 	
	Einbinden des Scripts:
	<!-- Timer Script einbinden -->
	<div id="total-time-left" align="right"> </div>
*/	


if(localStorage.getItem("count_timer")){
    var count_timer = localStorage.getItem("count_timer");
} else {
    var count_timer = 60*60;
}
var minutes = parseInt(count_timer/60);
var seconds = parseInt(count_timer%60);
function countDownTimer(){
    if(seconds < 10){
        seconds= "0"+ seconds ;
    }if(minutes < 10){
        minutes= "0"+ minutes ;
    }
    
    document.getElementById("total-time-left").innerHTML = "Übrige Zeit: "+minutes+" Minutes "+seconds+" Seconds";
    if(count_timer <= 0){
         localStorage.clear("count_timer");
		 document.location.href="7.1_EndeGescheitert.html";
    } else {
        count_timer = count_timer -1 ;
        minutes = parseInt(count_timer/60);
        seconds = parseInt(count_timer%60);
        localStorage.setItem("count_timer",count_timer);
        setTimeout("countDownTimer()",1000);
    }
}
setTimeout("countDownTimer()",100);

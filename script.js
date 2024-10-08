var timer=60;
var score=0;
var hitrn=0;
function makebubble(){
    var clutter=" ";
for (var i=1 ;i<=168; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer(){
    var timerr= setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#runtime").textContent = timer;
        }
        else{
            clearInterval(timerr);
            document.querySelector("#pbtm").textContent=`GAME OVER`;
        }
    },1000);
}
function hitval(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function scorevall(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(deets){
    var clickednum=Number(deets.target.textContent);
    if(clickednum === hitrn){
        scorevall();
        makebubble();
        hitval();
    }
});
hitval();
runtimer();
makebubble();
// inicjalizacja potrzebnych zmiennych
const plotno = document.getElementById("plotno");
const ctx = plotno.getContext("2d");
const kwadrat = { a:20, x:10, y:10 dx:1 };
const pause_button=document.querySelector("#pause_button");
let isRunning=false;

document.addEventListener("DOMContentLoaded", function() {
	pause_button.addEventListener("click:, (event) =>{
		isRunning=!isRunning;
		event.target.innerHTML=(isRunning) ? "Stop" : "Start";
		(isRunning) ? start() : stop();
	});
});
function start(){
	isRunning=true;
	update();
}
function stop(){
	isRunning=false;
}
function update(){
	if(isRunning){
		rysuj_kwadrat();
		requestAnimationFrame(update);
	}
}

const rysuj_kwadrat = function() {

    // obliczenia
    if(kwadrat.dx>0 && (kwadrat.x+kwadrat.dx+kwadrat.a) > plotno.width){
		kwadrat.dx=-1;
	}
	else if(kwadrat.dx<0 && (kwadrat.x+kwadrat.dx<0)){
		kwadrat.dx=1;
	}
	kwadrat.x+=kwadrat.dx;
	
    // czyścimy płótno
    ctx.clearRect(0, 0, plotno.width, plotno.height);

    // rysujemy 
    ctx.fillStyle = '#000';
    ctx.fillRect(kwadrat.x, kwadrat.y, kwadrat.a, kwadrat.a);

    requestAnimationFrame(rysuj);
}
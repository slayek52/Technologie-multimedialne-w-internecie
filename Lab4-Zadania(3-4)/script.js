const plotno = document.getElementById("plotno");
const ctx=plotno.getContext("2d");
const rerun_button = document.querySelector("#run_button");
let bars=[];
let data = [
{key: 'Bartek', value:280),
	{key:'Slayek', value:192},
		{key:'Staszek', value: 350}
		]
		let isRunning=false;
		
		document.addEventListener("DOMContentLoaded", function() {
			run_button.addEventListener("click", (event)=>{
				start();
			});
		});
		function start() {
			isRunning=true;
			bars=[];
			let spacing=0;
			data.forEach(element=>{
				let bar = new Bar(target_height=element.value, label=element.key)
				bar.x+=spacing;
				bars.push(bar);
				spacing+=70;
		}};
		update();
}
function stop(){
	isRunning=false;
}
function update(){
	if(isRunning{
		ctx.clearRect(0,0,plotno.width, plotno.height);
		bars.forEach(bar=>{
			bar.draw(ctx);
		});
		requestAnimationFrame(update);
	}
}
class Bar {
	constructor(target_height=200, label='bar 1', width=50, color ='#445599'){
		this.x=10;
		this.y=plotno.height-10;
		this.dy=7;
		this.color=color;
		this.height=0;
		this.width=width;
		this.isDrawn=false;
		this.label=label;
		this.target_height=target_height;
	}
	
	draw(ctx){
		ctx.fillStyle=this.color;
		ctx.fillRect(this.x, this.y, this.width, -this.height);
		ctx.fillStyle='#000';
		ctx.font="20px Arial";
		ctx.fillText(this.label,this.x, this.y-this.height-5);
		this._update();
	}
	_update(){
		if((this.height/this.target_height>0.7)&& this.dy>1){
			this.dy-=0.3;
		}
		if(this.height<this.target_height){
			this.height+=this.dy;
		}
		else{
			this.isDrawn=true;
		}
	}
}
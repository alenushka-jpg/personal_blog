import animate from"./animaterplus.js";function random(e,t){return Math.random()*(t-e)+e}animate({elements:".service-block",duration:2e3,delay:e=>100*e,transform:["scale(0)","scale(1)"]});class Visual{constructor(){this.canvas=document.querySelector("#canvas"),this.context=this.canvas.getContext("2d"),this.canvasWidth=0,this.canvasHeight=0,this.particleLength=150,this.particles=[],this.particleMaxRadius=8,this.handleMouseMoveBind=this.handleMouseMove.bind(this),this.handleClickBind=this.handleClick.bind(this),this.handleResizeBind=this.handleResize.bind(this),this.initialize(),this.render()}initialize(){this.resizeCanvas();for(let e=0;e<this.particleLength;e++)this.particles.push(this.createParticle(e));this.bind()}bind(){document.body.addEventListener("mousemove",this.handleMouseMoveBind,!1),document.body.addEventListener("click",this.handleClickBind,!1),window.addEventListener("resize",this.handleResizeBind,!1)}unbind(){document.body.removeEventListener("mousemove",this.handleMouseMoveBind,!1),document.body.removeEventListener("click",this.handleClickBind,!1),window.removeEventListener("resize",this.handleResizeBind,!1)}handleMouseMove(e){this.enlargeParticle(e.clientX,e.clientY)}handleClick(e){this.burstParticle(e.clientX,e.clientY)}handleResize(){this.resizeCanvas()}resizeCanvas(){this.canvasWidth=document.body.offsetWidth,this.canvasHeight=document.body.offsetHeight,this.canvas.width=this.canvasWidth*window.devicePixelRatio,this.canvas.height=this.canvasHeight*window.devicePixelRatio,this.context=this.canvas.getContext("2d"),this.context.scale(window.devicePixelRatio,window.devicePixelRatio)}createParticle(e,t){const i=random(1,this.particleMaxRadius),a=t?-i-random(0,this.canvasWidth):random(0,this.canvasWidth);let s=random(this.canvasHeight/2-150,this.canvasHeight/2+150);s+=random(-100,100);const n=random(.05,1);return{id:e,x:a,y:s,startY:s,radius:i,defaultRadius:i,startAngle:0,endAngle:2*Math.PI,alpha:n,color:{r:random(0,100),g:random(0,100),b:255},speed:n+1,amplitude:random(50,200),isBurst:!1}}drawParticles(){this.particles.forEach((e=>{this.moveParticle(e),this.context.beginPath(),this.context.fillStyle=`rgba(${e.color.r}, ${e.color.g}, ${e.color.b}, ${e.alpha})`,this.context.arc(e.x,e.y,e.radius,e.startAngle,e.endAngle),this.context.fill()}))}moveParticle(e){e.x+=e.speed,e.y=e.startY+e.amplitude*Math.sin(e.x/5*Math.PI/180)}enlargeParticle(e,t){this.particles.forEach((i=>{if(i.isBurst)return;const a=Math.hypot(i.x-e,i.y-t);if(a<=100){const e=(100-a)/1.5;TweenMax.to(i,.5,{radius:i.defaultRadius+e,ease:Power2.easeOut})}else TweenMax.to(i,.5,{radius:i.defaultRadius,ease:Power2.easeOut})}))}burstParticle(e,t){this.particles.forEach((i=>{Math.hypot(i.x-e,i.y-t)<=100&&(i.isBurst=!0,TweenMax.to(i,.5,{radius:i.defaultRadius+200,alpha:0,ease:Power2.easeOut,onComplete:()=>{this.particles[i.id]=this.createParticle(i.id,!0)}}))}))}render(){this.context.clearRect(0,0,this.canvasWidth+2*this.particleMaxRadius,this.canvasHeight),this.drawParticles(),this.particles.forEach((e=>{e.x-e.radius>=this.canvasWidth&&(this.particles[e.id]=this.createParticle(e.id,!0))})),requestAnimationFrame(this.render.bind(this))}}new Visual;
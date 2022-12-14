const canvas=document.getElementById("canvasboi");
canvas.width=200;

// controlTypes DUMMY, AI, KEYS

const ctx = canvas.getContext("2d");
const road=new Road(canvas.width/2,canvas.width*0.9);
const car=new Car(road.getLaneCenter(1),100,30,50,"AI");
const trafic=[
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",5)
]

animate();

function animate(){
    for(let i=0;i<trafic.length;i++){
        trafic[i].update(road.borders,[])
    }
    car.update(road.borders,trafic);

    canvas.height=window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);

    for(let i=0;i<trafic.length;i++){
        trafic[i].draw(ctx,"red");
    }

    car.draw(ctx,"blue");

    ctx.restore();
    requestAnimationFrame(animate);
}
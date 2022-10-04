class Car {
    constructor(x,y,width,hight){
        this.x = x
        this.y = y
        this.width = width
        this.hight = hight

        this.speed = 0
        this.accesraton = 0.2;
        this.maxSpeed = 9;
        this.frick = 0.05;
        this.diret = 0


        this.sensor=new Sensor(this);
        this.controls = new Controls();
    }

    update(){
        this.#move()
        //this.sensor.update();
    }

    #move(){
        if(this.controls.forward){
            this.speed +=this.accesraton
        }
        if(this.controls.back){
            this.speed -=this.accesraton
        }

        if(this.speed>this.maxSpeed){
            this.speed = this.maxSpeed
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed = -this.maxSpeed/2
        }
        if(this.speed>0){
            this.speed -= this.frick
        }
        if(this.speed<0){
            this.speed += this.frick
        }
        if(Math.abs(this.speed)<this.frick){
            this.speed = 0
        }
        if (this.speed != 0){
            if(this.controls.left){
                this.diret += 0.03
            }
            if(this.controls.right){
                this.diret-=0.03
            }
        }

        this.x-=Math.sin(this.diret)*this.speed
        this.y-=Math.cos(this.diret)*this.speed
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.diret)
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.hight/2,
            this.width,
            this.hight
        );
        ctx.fill();

        ctx.restore();

        //this.sensor.draw(ctx)
    }

}
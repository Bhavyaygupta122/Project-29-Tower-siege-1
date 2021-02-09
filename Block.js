class Block{
    constructor(x,y,width,height){
        var option={
            restitution: 0.4,
            friction: 1.4,
            density:0.0001
        }

        this.body=Bodies.rectangle(x,y,width,height,option);
        this.w=width;
        this.h=height;

        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle =this.body.angle;

        push();
        rectMode(CENTER)
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rect(0,0,this.w,this.h);
        pop();
    }    
}
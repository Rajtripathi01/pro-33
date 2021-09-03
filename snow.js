

class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
       }
        this.body=Bodies.circle(x,y,radius,options)
         this.radius=radius
         this.image=loadImage("snow5.webp")

         World.add(world,this.body)

    }   
    
     display(){
     ellipseMode(RADIUS);
     fill (255)
    
     circle(this.body.position.x,this.body.position.y,this.radius)
      
     imageMode(CENTER)
    
    image(this.image,0,0,this.x,this.y,this.radius)
    
     }
    }
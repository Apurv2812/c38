class Paper {

    constructor(x,y,width,height){
   
  
   var options={
      
    "restitution":0.3,
    "friction":1,
    "density":1.2
   }
   this.body = Bodies.rectangle(x,y,width,height,options)
   paperObject = createSprite(100,200);
   this.width = width;
   this.height = height;
   this.image=loadImage("paper.png")
   World.add(world, this.body);
    }
    
   display(){
     
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0,this.width,this.height);
    pop();

   camera.position.x = paperObject.x;
           drawSprites();
   }

    
    
   }

   

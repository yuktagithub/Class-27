class chain {

constructor(bodyA,bodyB){

var options={
    bodyA:bodyA,
    bodyB:bodyB,
    length:20,
    stiffness:0.5
    
}

this.body=Constraint.create(options)

World.add(world,this.body)

}

 display(){
     var pointA= this.body.bodyA.position
     var pointB= this.body.bodyB.position
line (pointA.x,pointA.y,pointB.x,pointB.y)



 }





    
}
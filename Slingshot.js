class Slingshot {

constructor (bodyA,pointB) {

var options = {

bodyA:bodyA,
pointB:pointB,
stiffness: 0.05,
length: 10
}

this.chain = Matter.Constraint.create (options)
this.pointB = pointB
World.add(world,this.chain)


}

launch () {

    this.chain.bodyA = null 
    
    
    }
    

display(){

if (this.chain.bodyA){

    var pA = this.chain.bodyA.position
var pB = this.pointB

stroke("yellow")
line(pA.x,pA.y,pB.x,pB.y)
strokeWeight(9)


}

}



}
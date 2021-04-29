class rope{
    constructor(bodyA, pointB){
          var options = {
              bodyA: bodyA,
              pointB: pointB,
              stiffness: 1.5,
              length: 250
          }
         
          this.pointB = pointB;
          this.rope = Constraint.create(options);
          World.add(world, this.rope);
      }
      
      display(){
        if(this.rope.bodyA){
        push ();
        stroke (48,22,8);
        strokeWeight(5);

        //line(x1,y1,x,y2);
        line(this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y);

        pop ();
        }
      }

}
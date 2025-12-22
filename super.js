// super = keyword is used in classes to call the constructor or
//               access the properties and methods of a parent (superclass)
//               this = this object
//               super = the parent

class animal { 
    constructor(){ }

    move(x){ 
         console.log(`${this.name} is moving at ${x} speed`);
       
    }
}

class rabbit extends animal {

    constructor(name, age, runspeed){
        
        super();
        this.name=name;
        this.age=age;
        this.runspeed=runspeed;
       
    }
    run(){
      super.move(this.runspeed)
           }
}


class hawk extends animal {


    constructor(name, age, flyingspeed){
        super();
        this.name=name;
        this.age=age;
        this.flyingspeed=flyingspeed;
    }}

class fish extends animal {

    constructor(name, age,swimspeed){
        super()
        this.name=name;
        this.age=age;
        this.swimspeed=swimspeed;
    }}


     kim = new rabbit('kim',3,45);

     kim.run();
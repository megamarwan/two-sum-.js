// inheritance = allows a new class to inherit properties and methods 
//                         from an existing class. Helps with code reusability

class Animal { 
    alive = true; 
   
     eat(){
        console.log(`${this.name} is eating`)
    }
     sleep(){
        console.log(`${this.name} is sleeping`)
     }
}

class Dog extends Animal {
   
    name = 'happy';
} 

kim= new Dog();

console.log(kim.name);

kim.eat();
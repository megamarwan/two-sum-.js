// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

const person ={
    name : "John Doe",
    age : 30,
    hobbies : ["Reading", "Traveling", "Gaming"],
    address : {
        street : "123 Main St",
        city : "Anytown",
        state : "CA",   
}}

console.log(person.address.city); // Accessing nested object property

for (prop in person.address){
    console.log(person.address[prop]);}
class Charatcer {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address { 
    constructor(street, city, state){
        this.street = street;
        this.city = city;
        this.state = state;
    }
}

const  character1 = new Charatcer("Alice", 28, "456",
                                     "Elm St", 
                                     "NY");

const  character2 = new Charatcer("bob", 28, "300",
                                     "oolm St", 
                                    "tripoli",)
console.log(character1.address.city);                                  
// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
const sponge = { 
    name: 'Alice',
    age: 30 ,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }   ,
}

sponge.greet();
const person = {
  name: "Alice",
  // Method defined inside the object (this works as expected)
  greetMethod: function() {
    console.log(`Hello from the method: ${this.name}`); 
  }
};

const looseFunction = person.greetMethod;

// 1. Regular Call (predictable, this = person)
person.greetMethod(); // Output: Hello from the method: Alice

// 2. Loose Call (unpredictable, this = global/undefined)
looseFunction(); 
// Output: Hello from the method: undefined (or "Hello from the method: [global name]" in non-strict mode)
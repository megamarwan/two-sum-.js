

// static = keyword that defines properties or methods that belong 
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)

class Math{


    static pi = 3.14;

    static getcircumference(x){ 
        return 2 * this.pi * x;
    }
}

console.log(Math.pi); // accessing static property without creating an object
console.log(Math.getcircumference(5)); // accessing static method without creating an object

class User {
    static usercount = 0 ; 
    constructor(x){
        this.username= x;
        User.usercount ++; 
    }

    static displayUserCount(){
        console.log(`there are ${User.usercount} users`);
}}

user1 = new User('alice');
user2 =new User('bob');


User.displayUserCount(); // accessing static method to display user count
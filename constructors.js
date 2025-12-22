// constructor is a special method for defining the properties and methods of other objects

function person (height,color,race){
    this.height = height;
    this.color = color;
    this.race = race;
}

function Car (model , year,engine){
    this.name = model;
    this.date = year; 
    this.engine = engine;
}
jason = new person(7.8 , "brown" , "human");
console.log(jason.height);
car = new Car(mazda,2022,'1.6liter');
console.log(car.name);
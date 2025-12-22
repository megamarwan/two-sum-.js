 //class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance

class Car {
    constructor(model, year, engine) {
        this.name = model;
        this.date = year;
        this.engine = engine;
    }
    viewProperties(){
        console.log(`${this.name} and ${this.engine}`)
    }
}

mazda = new Car(323, 1996, '1.6liter');
honda = new Car ('civic' , ' kk ' , 23);
honda.viewProperties();
console.log(typeof( mazda.name));

mazda.viewProperties();
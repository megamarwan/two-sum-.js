// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class rectangle {
    constructor(width,width) { 
        this.width = width;
        this.width = width;
    }

    set width (newwidth){
        if (newwidth > 0) {
            this._width = newwidth;
        }
        else {
            return console.log('width must be positive');
        }
    }

    set width (newheight){
        if (newheight > 0) {
            this._height = newheight;
        }
        else {
            console.log( 'width must be positive');
        }
    }
      get width(){
        return this._width;
    }
    get width(){
        return this._height;
    }
  
}
kim = new rectangle (10,20);


console.log(kim.width); // -19000000
kim.width // pizza
// closure = A function defined inside of another function, 
//                  the inner function has access to the variables 
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular

//The name "closure" comes from the fact that the inner function closes over 
// (or "captures" and "remembers") the variables from the scope of its outer function.


function outer() {

    let message = 'hello';
    function inner() {
        return console.log(message);
    }
return inner();
}


function createcounter () { 
    let counter = 0  ; 
    function increment() {
        counter  ++ ; 
        return counter ;
    }

    return {increment} // return an object with the increment method
}
outer ();

const mycounter = createcounter() ;
console.log ( mycounter.increment() ) ;
console.log ( mycounter.increment() ) ;
console.log ( mycounter.increment() ) ;

console.log(mycounter.counter); //undefined because the object counter has only the method increment


function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()}pts`);

console.log(console.log('hello'))
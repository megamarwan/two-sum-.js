let x ; 
function guess_x(numb){
    const  guessed_number = Math.floor(Math.random()*10);
    if (guessed_number === numb){
        return [true, guessed_number];
    } else {
        return [false, guessed_number];
    }
}

x =  window.prompt("Guess a number between 0 and 10: ");
const result = guess_x(Number(x));
console.log(...result)


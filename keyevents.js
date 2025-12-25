// eventListener = Listen for specific events to create interactive web pages
//                             events: keydown, keyup
//                             document.addEventListener(event, callback);
const myBox = document.getElementById("mybox");

const moveAmount = 10;

let x = 0;

let y = 0;
myBox.style.top = '30px'


document.addEventListener('keydown', e=> {
    console.log(`Key "${e.key}" has been pressed down`);
    e = document.getElementById('mybox')
    e.textContent = 'hi'

})

document.addEventListener('keyup', e => {
    console.log(`key  ${e.key} was pushed up`)
})

document.addEventListener("keyup", event => {

    myBox.textContent = "😀";

    myBox.style.backgroundColor = "lightblue";

});



document.addEventListener("keydown", event => {

    myBox.textContent = "😲";

    myBox.style.backgroundColor = "tomato";

});



document.addEventListener("keyup", event => {

    myBox.textContent = "😀";

    myBox.style.backgroundColor = "lightblue";

});



document.addEventListener("keydown", event => {



    if(event.key.startsWith("Arrow")){



        event.preventDefault();



        switch(event.key){

            case "ArrowUp":

                y -= moveAmount;

                break;

            case "ArrowDown":

                y += moveAmount;

                break;

            case "ArrowLeft":

                x -= moveAmount;

                break;

            case "ArrowRight":

                x += moveAmount;

                break;

        }



        myBox.style.top = `${y}px`;

        myBox.style.left = `${x}px`;

    }

});
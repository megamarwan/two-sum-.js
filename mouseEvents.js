// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                             .addEventListener(event, callback);

const box = document.getElementById('mybox');


function changColor(event){
    }
box.addEventListener('click', function (event){
    console.log(event);
    event.target.style.backgroundColor = 'blue';
    event.target.textContent = 'I was clicked';
}
);

box.addEventListener('mouseover', function (event){box.style.backgroundColor = 'red';
    event.target.textContent = 'Mouse on me';
});

box.addEventListener('mouseout', (e) => { 
    e.target.style.backgroundColor = 'green';
    e.target.textContent = 'click me';
})

const button = document.getElementById('mybutton');

button.addEventListener('click', (box) =>{
    box = document.getElementById('mybox');
    box.style.backgroundColor = 'yellow';
    box.textContent = 'Button Clicked';
})
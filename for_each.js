let numbers = ['apple' ,'bannana', 'cherry'];
numbers.forEach(capitalize)
numbers.forEach(display)
function display (element){
    console.log(element);
}

function capitalize (element, index, array){
    array[index]= element.charAt(0).toUpperCase() + element.slice(1);}
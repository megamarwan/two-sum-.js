array = [ 'apple ', ' banana', 'cherry'] ;

    function printArray(arr,arr2){ 
        arr2 = [,...arr2,' country']; 

return arr2; 
    }
    console.log(printArray(...array));
    const x = Window.prompt("Enter a number: ");
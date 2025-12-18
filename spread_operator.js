// 1. Array declaration without extra spaces
const originalArray = ['apple', 'banana', 'cherry']; 

// 2. A function designed to accept one array and return a new one
function modifyArray(arr) {
    // 3. Spreading the array correctly
    const newArray = [...arr, 'country']; 
    return newArray;
}

// 4. Calling the function correctly, passing the array as a single argument
const result = modifyArray(originalArray); 
console.log(result); // Output: ['apple', 'banana', 'cherry', 'country']

// 5. Correct capitalization for window.prompt
const x = window.prompt("Enter a number: ");

// 6. Accessing the element and setting its content (assuming a <p id="demo"></p> exists)
const talk = document.getElementById("demo");
// Use the modified result array for display, or the original if preferred
talk.textContent = result.join(', '); // Use join for a cleaner string display
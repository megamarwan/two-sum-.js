// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);\
//  clearTimeout(TimeoutID) = cancels a timeout previously established by calling setTimeout()
// automatically asynchronous

function hello() {
    window.alert("Hello");
}
 
setTimeout(hello, 3000);
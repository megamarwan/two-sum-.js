// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings

let arr = [1, 5, 3, 9, 2, 4];


console.log(arr.sort()); // sorts as strings by default

console.log(arr.sort((a, b) => a - b)); // sorts in ascending order the call back method returns plus 1 or zero or minus 1 and based on that it sorts them out 
                                        //does not change any value just tells the sort method how to sort

const person = [{ name: 'sponge', age: 3, gpa: 1.3 },
{ name: 'sandy', age: 25, gpa: 1.5 },
{ name: 'john', age: 25, gpa: 19 },
{ name: 'kirk', age: 0, gpa: 2.6 }];

const sorteedPeople = person.sort((a,b) => {return a.age - b.age}); //or you can write without return

const sorteedPeoplewitoutreturn = person.sort((a,b) => a.age - b.age); //remove the curly braket

const sorteedPeoplewithstring = person.sort((a,b) => a.name.localcompare(b.name));

console.log( person.sort((a,b) => {a.age - b.age}));
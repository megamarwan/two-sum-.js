

function generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols, includeLowercase) {
const lowercasechars = 'abcdefghijklmnopqrstuvwxyz';
const uppercasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberchar = '0123456789';
const symbolchar = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

let allowedchars= ' ' ; 
let password = '  ';
allowedchars += includeLowercase ? lowercasechars : '' ;
allowedchars += includeUppercase ? uppercasechars : '' ;
allowedchars += includeNumbers ? numberchar : '' ;
allowedchars += includeSymbols ? symbolchar : '' ;      
console.log(allowedchars);

if (passwordLength <= 0 ) {
    console.log('Password length must be greater than 0');
    return ' ' ; 
}
if (allowedchars.length === 0 ){
    console.log('At least one character type must be selected');
}

for (let i =  0; i < passwordLength ; i++ ) {
    const randomIndex = Math.floor(Math.random() * allowedchars.length);
    password += allowedchars[randomIndex];
}

return password ; 
}

const passwordLength = 10;
const includeUppercase = true; 
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols= true;

//generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols, includeLowercase);

console.log(generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols, includeLowercase));


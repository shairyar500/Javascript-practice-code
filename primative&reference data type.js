console.log('Hello World');

// primative data type 

//string

let name = 'Shairyar'
let fullName = 'Shamshad Ali'
console.log('my name is ' + name);
console.log(`my name is ${name} ${fullName}`);


//numbers
let totalNum = 150;
console.log(typeof totalNum + totalNum);

//boolean
let isActive = true;
console.log(isActive);
console.log('the data type is ' + (typeof isActive));

// Reference Data type Arrays, object literals, function and date

//Arrays
let arr1 = [15,5,6,1,46,321, true, 'hello']
console.log('the data tyoe is ' + (typeof arr1));

// object literal

let techProfile = {
    'Total students': 35,
    institude: 'tech karo web development',
    registration: 'Government of Pakistan',
    isActive: true,
}
console.log(techProfile.institude);
console.log(techProfile.registration);
console.log(typeof techProfile);

//function

function fullyName(){
}
console.log(typeof fullyName);

//date

let date = new Date();
console.log(typeof date);
// console.log('hello here');

// For while do while loop

// for (let i=110 ; i < 200 ; i++){
//     console.log(i);
// }

// let a = 98;
// a +=1;
// a ++
// console.log(a);

// for (let i=0 ; i<=100 ; i++){
//     console.log(i)
// }

// for (let i = 0 ; i <= 100; i++){
//     console.log(i);
// }

// let j = 0;
// while(j<10){
//     console.log(j + 1)
//     j++;
// }

// let k = 0;
// do{
//     if(k === 5){
//         // break;
//         continue;
//     }
//     console.log(k + 1);
//     k +=1;
// }while (k < 10)
// console.log('done')

let arr = [2,3,4,5,6];

// for(i=0; i< arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(function(iterate){
    console.log(iterate);
})


let names = ['shairyar ', ' abida ', ' humza '];

// for(i=0; i < names.length; i++){
//     console.log(names[i]);
// }

names.forEach(function(allNames){
    console.log(allNames);
})

let obj = {
    name: 'Shairyar',
    age: 28,
    Os: 'windows 10'
}

for(let key in obj){
    console.log(`The ${[key]} of object is ${obj[key]}`);
}
// for(let i = 0; i< obj.length; i++){
//     console.log(obj[i]);
// }

// obj.forEach(function(object){
//     console.log(object);
// })
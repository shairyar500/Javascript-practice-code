//Functions
let city = "karachi";

const alllocation = function (city, travel= 'will be reached you shortly'){
    let msg = `hope you travel to ${city} and i will pick you at your ${travel}`
    return msg;
}

let value = alllocation(city, "destination");
console.log(value)
// console.log('hi');

// let name = 'shairyar' ;


// function greet(name, happy){

//     console.log(`Happy Birthday to ${name}. also want you to be ${happy}`);
// }

// greet(name, 'happy for life');

// const myobjf = {
//         name: "SkillF",
//         game: function(){
//             return "GTA";
//         }
//     }
//     console.log(myobjf.game())

const myprofile = {
    name: 'shairyar',
    course: function(){
        return 'Tech karo';
    }
}
console.log(myprofile.course());


let items = ['fruits', 'vegetables', 'groceries']

// for(i =0 ; i < items.length ; i++){
//     console.log(items);
// }

items.forEach (function(index, element ) {
    console.log(index, element  );
});


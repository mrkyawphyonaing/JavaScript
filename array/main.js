//let people = new Array('John', 'Hellens', 'Mary', 'Mike');
let people = ['John', 1992, "November", 23, ['Taungyi', 'Pann Hlaing', 'Daw Su Su Mar']];

//document.write(people);

/*for (var i = 0; i < people.length; i++) {
    document.querySelector("ul").innerHTML += `<li>${people[i]}</li>`;
}*/
//============================================================================================

//Using pop();
// people.pop();
// for (var i = 0; i < people.length; i++) {
//     document.querySelector("ul").innerHTML += `<li>${people[i]}</li>`;
// }

//============================================================================================

//Using push();
//people.push('Mikey');
// for (var i = 0; i < people.length; i++) {
//     document.querySelector("ul").innerHTML += `<li>${people[i]}</li>`;
// }

//============================================================================================

//Using shift();
// people.shift();
// for (var i = 0; i < people.length; i++) {
//     document.querySelector("ul").innerHTML += `<li>${people[i]}</li>`;
// }

//============================================================================================

//Using unship();
// people.unshift('Jole');
// for (var i = 0; i < people.length; i++) {
//     document.querySelector("ul").innerHTML += `<li>${people[i]}</li>`;
// }

//============================================================================================

//Using concapt();
let city = ['Yangon', 'Mandalay', 'Taunggyi', 'Lashow'];
let country = ['China', 'United States', 'Singapore', 'United Kingdom'];
// let world = country.concat(city);
// for (var i = 0; i < world.length; i++) {
//     document.querySelector("ul").innerHTML += `<li>${world[i]}</li>`;
// }

//============================================================================================

//Using spread operators;

// let world = [...country, ...city];
// for (var i = 0; i < world.length; i++) {
//     document.querySelector("ul").innerHTML += `<li>${world[i]}</li>`;
// }

//============================================================================================

//Using splice operators

//city.splice = (2, 2);
// for (var i = 0; i < city.length; i++) {
//     document.querySelector("ul").innerHTML += `<li>${city[i]}</li>`;
// }
//console.log(city);

//============================================================================================

//Using slice

// let newCountry = country.slice(1, 3);

// console.log(newCountry);
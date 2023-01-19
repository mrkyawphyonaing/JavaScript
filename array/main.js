//let people = new Array('John', 'Hellens', 'Mary', 'Mike');
//let people = ['John', 1992, "November", 23, ['Taungyi', 'Pann Hlaing', 'Daw Su Su Mar']];

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
//let city = ['Yangon', 'Mandalay', 'Taunggyi', 'Lashow'];
//let country = ['China', 'United States', 'Singapore', 'United Kingdom'];
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

//============================================================================================

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//     let inner = arr[i];
//     for (let j = 0; j < inner.length; j++) {
//         console.log(inner[j]);
//     }
// }

// let newArray = arr.flat();
// console.log(newArray);

//============================================================================================

//Count vowel characters 
// let vowel = "Hello How are you? Yes I'm fine.";

// function countVowels(v) {
//     let count = 0;
//     let caseChange = v.toLowerCase();
//     //console.log(caseChange);
//     for (let i of caseChange) {
//         //console.log(i);
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//             count++;
//         }
//     }
//     return count;

// }
// console.log("Number of count is : " + countVowels(vowel));

//============================================================================================

// Sort array

// let computerSciences = [
//     "Javascript", "Java", "Python", "MachineLanguage", "Ruby", "A+"
// ];

// console.log(computerSciences.sort());
// console.log(computerSciences.sort().reverse());

// let number = [10, 20, 25, 14, 23, 45, 85, 74, 22, 11];

// console.log(number.sort((a, b) => a - b));
// console.log(number.sort((a, b) => b - a));
// let largestNumber = number.sort((a, b) => b - a)[0];
// console.log("Largest number is : " + largestNumber);

//============================================================================================

//Capitalize string
let str = "kyaw phyo naing";

function capitalize(str) {
    let chnageArray = str.split(" ");
    let stringArray = [];
    //console.log(chnageArray);
    chnageArray.forEach((value, index) => {
        console.log(value, index);
        let firstLetter = value.charAt(0).toUpperCase() + value.slice(1);
        //console.log(firstLetter);
        stringArray[index] = firstLetter;
    });
    return stringArray;
}

console.log(capitalize(str));
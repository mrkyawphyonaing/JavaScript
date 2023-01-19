// let person1 = {
//     name: 'John',
//     age: 21,
//     hobbies: ["coding", "football", "gamePlayer"],
//     jobTitle: {
//         name: "Developer",
//         salary: 1000000,
//         show: function() {
//             console.log(`${this.name},${this.salary}`);
//         }
//     },
//     isActive: true,
//     details: function() {
//         console.log(`Person1's details are: ${this.name}, ${this.age},${this.jobTitle.name}, ${this.hobbies[0]},${this.isActive}`)
//     }
// }

// console.log(person1.name);
// person1.gender = 'male';
//person1.details();
// for (let i in person1) {
//      console.log(i);
//     console.log(person1[i]);
// }

//=======================================================================================================================================

let programmer = [{
        name: 'John',
        age: 21,
        language: ["javascript"],
        isActive: true,
        details: function() {
            console.log(` ${this.name} details is : ${this.age}, ${this.language[0]},${this.isActive}`)
        }
    },
    {
        name: 'Mike',
        age: 22,
        language: ["C++"],
        isActive: true,
        details: function() {
            console.log(` ${this.name} details is : ${this.age}, ${this.language[0]},${this.isActive}`)
        },
    },
    {
        name: 'Marry',
        age: 20,
        language: ["PHP"],
        isActive: true,
        details: function() {
            console.log(` ${this.name} details is : ${this.age}, ${this.language[0]},${this.isActive}`)
        },
    }

];

programmer.forEach((p) => {
    p.details();
})
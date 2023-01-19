function addNumber() {
    let total = 0;
    for (let i = 0; i <= 10000; i++) {
        total += i;
    }
    return total;
}

// function addLater() {
//     return new Promise((resolve, reject) => {
//         let result = addNumber();
//         if (result) resolve(result)
//         else reject();
//     })
// }

// addLater().then((result) => console.log(result)).catch((err) => console.log(err));

//=========================================================================================================================================

// async function addLater() {
//     let result = await addNumber();
//     console.log(result);
// }

// addLater();

//fetch("programmer.json")//calling from json file
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((result) => result.json()) //changing javascript object properties
//     .then((data) => console.log(data)) // get as Array object
//     .catch((err) => console.log(err))
//     .finally(() => console.log("fetch data complete"));

async function fetchData() {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await result.json();
    console.log(data);
}

fetchData();
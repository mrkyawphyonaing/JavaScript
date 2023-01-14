const registerEmail = "kyawphyonaing.jobmail@gmail.com";
const registerPassword = "1234567"


function login(e) {
    e.preventDefault();
    //console.log(e.target[0].value);
    let email = e.target[0].value;
    let password = e.target[1].value;

    if (email && password) {
        //statements
        if (email === registerEmail && password === registerPassword) {
            document.querySelector("#success").innerHTML = "Login successfull!";
            document.querySelector(".container").style.display = "none";
        } else if (email === registerEmail && password !== registerPassword) {
            document.querySelector("#error").innerHTML = "Wrong password";
        } else if (email !== registerEmail && password === registerPassword) {
            document.querySelector("#error").innerHTML = "Wrong email";
        }
    } else {
        document.querySelector("#error").innerHTML = "Please input all forms.";
    }
}
const button = document.querySelector("#calc");
const result = document.querySelector("#result");

button.onclick = () => {
    let day1 = Number(document.querySelector("#date").value);
    let month1 = Number(document.querySelector("#month").value);
    let year1 = Number(document.querySelector("#year").value);

    if (day1 && month1 && year1) {
        let date = new Date();
        let day2 = date.getDay();
        let month2 = date.getMonth() + 1;
        let year2 = date.getFullYear();

        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (day1 > day2) {
            day2 += months[month2 - 1];
            month2 -= 1;
        }

        if (month1 > month2) {
            month2 += 12;

            year2 -= 1;
        }

        let showday = day2 - day1;
        let showmonth = month2 - month1;
        let showyear = year2 - year1;

        result.innerHTML = `${showyear} years , ${showmonth} months and ${showday} days`;
        //console.log(day2);

    } else {
        alert("Fill all fields");
    }
}
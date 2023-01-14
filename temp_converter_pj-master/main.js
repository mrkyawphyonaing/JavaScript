function toCel() {
    let fer = Number(document.querySelector("#input").value);

    let Cel = (5 / 9) * (fer - 32)

    document.querySelector("#result").innerHTML = Cel.toFixed(1) + "C";

    document.querySelector("#input").value = "";
}

function toFer() {
    let Cel = Number(document.querySelector("#input").value);

    let fer = (9 / 5 * Cel) + 32;

    document.querySelector("#result").innerHTML = fer.toFixed(1) + "F";

    document.querySelector("#input").value = "";

}
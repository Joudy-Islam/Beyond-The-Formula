let button = document.querySelector("#sbmtbtn");
button.addEventListener("click", calculate);

const final = document.querySelector("#final");
const info = document.querySelector("#info");
const result = document.querySelector("#result");
const factTitle = document.querySelector("#factTitle");
const answerTitle = document.querySelector("#answerTitle");
const line = document.querySelector("#line");
const uu1 = document.querySelector("#uu1");
const tt1 = document.querySelector("#tt1");
const ss1 = document.querySelector("#ss1");
const accc1 = document.querySelector("#accc1");
const option = document.querySelector("#option");
option.addEventListener("change", choose);
const inputt = document.querySelector("#inputt");


function choose() {
    const selected = option.value;
    uu1.style.display = "none";
    tt1.style.display = "none";
    ss1.style.display = "none";
    accc1.style.display = "none";
    inputt.style.display = "flex";

    if (selected === "s") {
        uu1.style.display = "flex";
        tt1.style.display = "flex";
        accc1.style.display = "flex";
        ss1.style.display = "none";


    }
    else if (selected === "u") {
        uu1.style.display = "none";
        tt1.style.display = "flex";
        accc1.style.display = "flex";
        ss1.style.display = "flex";
    }
    else if (selected === "t") {
        uu1.style.display = "flex";
        tt1.style.display = "none";
        accc1.style.display = "flex";
        ss1.style.display = "flex";
    }
    else if (selected === "a") {
        uu1.style.display = "flex";
        tt1.style.display = "flex";
        accc1.style.display = "none";
        ss1.style.display = "flex";
    }
    else if (selected === "..") {
        inputt.style.display = "none";
        return;
    }
}
function appear() {
    final.style.display = "flex";
    answerTitle.style.display = "flex";
    line.style.display = "flex";
    info.style.display = "block";
    factTitle.style.display = "block";
}
function calculateS() {
    const selected = option.value;
    const uVal = document.querySelector("#u1").value;
    const tVal = document.querySelector("#t1").value;
    const aVal = document.querySelector("#a1").value;

    if (
        uVal === "" ||
        tVal === "" ||
        aVal === ""
    ) {


        alert("Please enter all values.");
        return;
    }


    const u = Number(document.querySelector("#u1").value);
    const t = Number(document.querySelector("#t1").value);
    const a = Number(document.querySelector("#a1").value);
    if (selected === "s") {

        let s = (u * t) + (0.5 * a * t * t);
        result.innerHTML = `<strong>Displacement = ${s.toFixed(2)} m</strong>`;
        appear();
    }



}

function calculateU() {
    const selected = option.value;
    const tVal = document.querySelector("#t1").value;
    const aVal = document.querySelector("#a1").value;
    const sVal = document.querySelector("#s1").value;
    if (
        tVal === "" ||
        aVal === "" ||
        sVal === ""
    ) {

        alert("please Enter all values");
        return;
    }
    const t = Number(document.querySelector("#t1").value);
    const a = Number(document.querySelector("#a1").value);
    const s = Number(document.querySelector("#s1").value);

    if (selected === "u") {

        let u = (s - 0.5 * a * t * t) / t;
        result.innerHTML = `<strong>Initial Velocity = ${u.toFixed(2)} m/s</strong>`;

        appear();
    }



}


function calculateT() {
    const selected = option.value;
    const aVal = document.querySelector("#a1").value;
    const sVal = document.querySelector("#s1").value;
    const uVal = document.querySelector("#u1").value;
    if (
        aVal === "" ||
        sVal === "" ||
        uVal === ""
    ) {

        alert("Please enter all values");
        return;
    } const a = Number(document.querySelector("#a1").value);
    const s = Number(document.querySelector("#s1").value);
    const u = Number(document.querySelector("#u1").value);
    if (selected === "t") {


        let t = (-u + Math.sqrt(u * u + 2 * a * s)) / a;
        result.innerHTML = `<strong>Time = ${t.toFixed(2)} s</strong>`;

        appear();

    }


}

function calculateA() {
    const selected = option.value;
    const tVal = document.querySelector("#t1").value;
    const sVal = document.querySelector("#s1").value;
    const uVal = document.querySelector("#u1").value;
    if (
        tVal === "" ||
        sVal === "" ||
        uVal === ""
    ) {
        alert("Please enter all values");
        return;
    }
    const t = Number(document.querySelector("#t1").value);
    const s = Number(document.querySelector("#s1").value);
    const u = Number(document.querySelector("#u1").value);

    if (selected === "a") {
        let a = (2 * (s - u * t)) / (t * t);
        result.innerHTML = `<strong>Acceleration = ${a.toFixed(2)} m/s²</strong>`;
        appear();
    }


}
function calculate(event) {
    event.preventDefault();
    const selected = option.value;


    if (selected === "s") {
        calculateS();
    }
    else if (selected === "u") {
        calculateU();
    }
    else if (selected === "t") {
        calculateT();

    }
    else if (selected === "a") {
        calculateA();
    }
}
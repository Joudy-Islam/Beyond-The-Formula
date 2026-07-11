let button = document.querySelector("#sbmtbtn");
button.addEventListener("click", calculate);

const final = document.querySelector("#final");
const info = document.querySelector("#info");
const result = document.querySelector("#result");
const factTitle = document.querySelector("#factTitle");
const answerTitle = document.querySelector("#answerTitle");
const line = document.querySelector("#line");

function calculate(event) {
    console.log("انا شغال والله");
    event.preventDefault();
    
    const uv = document.querySelector("#u1").value;
    const tv = document.querySelector("#t1").value;
    const accv = document.querySelector("#a1").value;
    if (
        uv === "" ||
       tv === "" ||
        accv === ""

    ) {
alert("Please enter all values.");
return;
    }

const u = Number(uv);
const t = Number(tv);
const acc = Number(accv);
let s = (u * t) + (0.5 * acc * t * t);
    result.innerHTML = `<strong>Displacement = ${s.toFixed(2)} m</strong>`

final.style.display = "flex";
    answerTitle.style.display = "flex";
    line.style.display = "flex";
    info.style.display = "block";
    factTitle.style.display = "block";
}

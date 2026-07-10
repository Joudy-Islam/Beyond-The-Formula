let button = document.querySelector("#sbmtbtn");
button.addEventListener("click", calculate);

const a = document.querySelector("#as");
const b = document.querySelector("#info");
const res = document.querySelector("#result");
const y = document.querySelector("#yay");

function calculate(){
    const u = Number(document.querySelector("#u1"));
    const t = Number(document.querySelector("#t1").value);
    const acc = Number(document.querySelector("#a1").value);

    let s = u * t + 0.5 * acc * t *t;
    res.innerText = s.toFixed(2);

    y.style.display = "block";
    a.style.display = "block";
    b.style.display = "block";
}
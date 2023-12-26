let kEl = document.querySelector(".kurs");
let btnEl = document.querySelector(".btn_sel");
let pulEl = document.querySelector(".pul");
let hEl = document.querySelector(".a");
btnEl.addEventListener("click", () =>{
aEl.innerHTML = kEl.value * pulEl.value
});

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const ulEl = document.getElementById("result")
const formEl = document.getElementById("form-id");



function go(){
    
let number_of_people = parseInt(inputEl.value)

 ulEl.innerHTML = `

    <p>Cream cheese : ${(number_of_people*67.5).toFixed(2)} pod</p>
    <p>Whipping cream : ${(number_of_people*33.75).toFixed(2)} g</p>
    <p>Icing sugar : ${(number_of_people*16.875).toFixed(2)} g</p>
    <p>Whole eggs : ${(number_of_people*18.75).toFixed(2)} g</p>
    <p>Corntarch : ${(number_of_people*3.75).toFixed(2)} g</p>
    <p>Sea salt : ${(number_of_people*0.5).toFixed(2)} g</p>
    <p>Vanilla : ${(number_of_people*0.125).toFixed(2)} pod</p>
    <a href="reseted.html">reset</a>

`
ulEl.classList.remove("hidden");
formEl.classList.add("hidden");
}

btnEl.addEventListener("click",function(){
go()})
inputEl.addEventListener('keypress',function(e){
    if (e.key === 'Enter') {
        go()
      }
})

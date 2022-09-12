
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const ulEl = document.getElementById("result")
const collection = document.getElementsByClassName("conatiner");
let vals = [
   
            270 /*whipping_cream 33.75*/,
            135 /*icing_sugar 16.875*/,
            150 /*whole_eggs 18.75*/,
            30 /*cornstarch 3.75*/,
            4 /*sea_salt 0.5*/,
            1 /* vanila 0.125*/

]



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

}

btnEl.addEventListener("click",function(){
go()})
inputEl.addEventListener('keypress',function(e){
    if (e.key === 'Enter') {
        go()
      }
})

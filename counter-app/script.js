//  const counterBtn = document.querySelector('#counter-btn');
let saveEl = document.querySelector('#save-el')
 let countNumber = document.querySelector("#count-el")

 console.log(countNumber)
  let count = 0

 function increment(){
    count = count + 1
    countNumber.textContent  = count
    console.log(count)
 
 }

 function save(){
    let countstr =count +" - "
    saveEl.textContent +=countstr
    countNumber.textContent = 0
    count = 0
 }
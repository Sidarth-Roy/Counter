let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let total=document.getElementById("total")
let today=document.getElementById("today")
let count = 0
let tp=0
let tl=0

function increment() {
    count += 1
    tl+=1
    countEl.textContent = count
    today.textContent="Today: "+tl
}

function save() {
    let countStr = count + " , "
    saveEl.textContent += countStr
    tp+=count
    if(tp<0)
    {
        alert(Math.abs(tp)+" employees left");
        tp=0
    }
    total.textContent ="Total: "+tp
    countEl.textContent=0
    count=0
}
function decrement() {
    count -= 1
    countEl.textContent = count
}

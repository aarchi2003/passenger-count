


let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");
let count=0;

function increment(){
    count++;
    countEl.textContent=count;
   
}

function save(){
    console.log(count);
    let count1= " "+count+" - ";
    saveEl.textContent += count1;
    count=0;
    countEl.textContent=0;
}

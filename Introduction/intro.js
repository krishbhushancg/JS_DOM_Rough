// const prompt = require('prompt-sync')();



let bt = document.getElementById("btn");

bt.addEventListener("click",()=>bt.innerHTML="nhi dabana tha")
console.log(bt)

let a=document.getElementById("btn2")
console.log(a)

a.addEventListener("click",()=>{
    a.style.backgroundColor="aqua"
})

a.addEventListener("click",func);
function func(){
    a.style.backgroundColor="red"
}

let b=document.getElementById("bg")

btn2.addEventListener("click",function(){
    b.style.backgroundColor="pink"
})





let result=false;
a.addEventListener("click", function(){
    if (result){
        a.style.backgroundColor="blue"
        result=false;
    }
    else{
        a.style.backgroundColor="red";
        result=true;
    }
})


const card = document.querySelector(".product");

card.addEventListener("mouseover", () => {
  card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
});

card.addEventListener("mouseout", () => {
  card.style.boxShadow = "none";
});



let test=false;
card.addEventListener("click",function(){
    if (test){
        card.style.backgroundColor="black"
        test=false
    }
    else{
        card.style.backgroundColor="blue"
        test=true
    }
})


let e= document.querySelector(".dc")
let res1=false;
e.addEventListener("dblclick",function(){
    if (res1){
        e.style.backgroundColor="yellow"
        res1=false
    }
    else{
        e.style.backgroundColor="blueviolet"
        res1=true
    }
})

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Custom menu can be shown here");
});




let k=document.querySelector("#random")

k.addEventListener("mouseover",func);
function func(){
    let a =Math.floor(Math.random()*256);
    let b =Math.floor(Math.random()*256);
    let c =Math.floor(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${a},${b},${c})` 
}

let inp = document.getElementById("inp")
inp.addEventListener("keydown",key)

function key(e){
    if (e.key =="Enter"){
        console.log("in function")
        let a = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let c = Math.floor(Math.random()*256);
        document.body.style.backgroundColor = `rgb(${a},${b},${c})`
    }
}


let form = document.getElementById("form")
let nam = document.getElementById("nam")
console. log(nam)
let age = document.getElementById("age")
console. log(form)
form.addEventListener("submit", submittedData)
function submittedData(event){
    event.preventDefault();
}
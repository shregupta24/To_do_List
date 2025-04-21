const input=document.querySelector('#input-btn');
const task=document.querySelector('#list-container');

function addtask(){
    if(input.value === ''){
        alert("Please write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        task.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData()
}

task.addEventListener("click",function(e){
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",task.innerHTML);
}
function showTask(){
    task.innerHTML=localStorage.getItem("data");
}
showTask();
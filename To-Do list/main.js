// variables
const inputEl=document.getElementById("userInput");
const btn=document.getElementById("btn");
const ulEl=document.querySelector("ul");
let numberOfTasks=document.getElementById("numberTask");
let counter=0;
let total=0;



// event handlers for UserInput and Add button
inputEl.addEventListener("input",activateBtn)
btn.addEventListener("click",addTodos)
    
// addTodo function for adding ToDo's
function addTodos(){
if(inputEl.value=== ""){
    alert("Enter your ToDo")
}
else{
    const liEl=document.createElement("li");
    const deleteButton=document.createElement("button");
    deleteButton.innerText="Delete";
    deleteButton.setAttribute("id","deleteBtn");
    liEl.innerHTML=inputEl.value+`<button id="deleteBtn">Delete</button>`;
    ulEl.appendChild(liEl);
    inputEl.value="";
    counter=counter+1;
    numberOfTasks.innerText=counter;
 

 
    ulEl.lastElementChild.addEventListener("click",()=>{
        liEl.remove();
        counter=counter-1;
        numberOfTasks.innerText=counter;
    })
 
    // numberOfTasks.innerText=counter;

    
   



    
}

};

 
// activeBtn function to make Add button disable or remove disablity
function activateBtn(){
    if(inputEl.value!==""){
        btn.removeAttribute("disabled");
    }
    else{
        btn.setAttribute("disabled","disabled");
      
    }
}
activateBtn();
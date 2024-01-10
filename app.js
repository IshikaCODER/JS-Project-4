let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName =="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});


// let todo = [];

// let req = prompt("Please enter you request");

// while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list"){
//         console.log("-------------");
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("-------------");
//     }else if(req == "add"){
//         let task = prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(req == "delete"){
//         let idx = prompt("Please enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }else{
//         console.log("Wrong request");
//     }

//     req = prompt("Please enter your request");
// }
//defining an empty array
let todo=[];
let req = prompt("Please enter your request");
//let req = prompt("Please enter your request");
//agar koi add karra h to add akre and dobara se puche kya operation perform ho raha h
while(true){
    //hamesha kaam karta rahega but agar user ki request m quit aagya uss case m hum bahar chale jayenge
  if(req == "quit"){
    console.log("quiting app");
    break;
  }
  if(req == "list"){
    console.log("--------------");
    for(let i=0;i<todo.length;i++){
        console.log(i,todo[i]);
    }
    console.log("---------------");
}
else if(req == "add"){
    let task = prompt("Please enter your task to add");
    todo.push(task);
    console.log("task added");
}else if(req == "delete"){
    let idx = prompt("Please enter task indx to delete the task");
    todo.splice(idx,1);
    console.log("task deleted");
}
 req = prompt("Please enter your request");
}
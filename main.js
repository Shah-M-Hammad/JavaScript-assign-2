//? Chapter 43 to 48 

//TODO Question No.03

function deleteRow(a){
    let row = a;
    document.getElementById(row).remove();
}

//TODO Question No.05

let count = 0;

document.getElementById("decremental").onclick = function(){
    count-=1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("incremental").onclick = function(){
    count+=1;
    document.getElementById("counter").innerHTML = count;
}
var btn1=document.getElementById("btn1");
var err1=document.getElementById("err1");


//function display(){
//alart("btn clicked")
//}
function display(){
    try{
        alart("btn clicked")
    }catch(error){
        err1.innerText=error.meesage
    }
}

function check(){
    var dev=document.getElementById("devamgana").value;
    var aa=document.getElementById("aaaaa")
    try{
        if(dev=="")throw"Box cannot be empty";
        if(isNaN(dev))throw"Value is not a number";
        if(dev<10)throw"value should be greater than 10";
        if(dev>20)throw"value should be less than 20";

    }catch(error){
        aa.innerText=error
    }
    finally{
        document.getElementById("devamgana").value=" "
    }
}




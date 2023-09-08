
function ans(valu){
    let x=Math.floor(Math.random()*3)+1;
    if(valu==x){
        document.getElementById("msg").innerHTML="Congrats It's a Match";
    }else if(valu==""){
        document.getElementById("msg").innerHTML="Please enter a no correctly";
    }else if(valu>3){
        document.getElementById("msg").innerHTML="Please enter in limit(1 to 3)";
    }
    else{
        document.getElementById("msg").innerHTML="Better luck next time";
    }
}

document.getElementById("submit").onclick=function(){
    let valu=document.getElementById("guess").value;
    ans(valu);

}
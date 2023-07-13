var a= parseInt(prompt("Enter a number"));
var b= parseInt(prompt("Enter a number2"));
var op=prompt("Enter the operator");
switch(op){
    case'+':document.getElementById("result").textContent=(a+b);break;
    case'-':document.getElementById("result").textContent=(a-b);break;
    case'*':document.getElementById("result").textContent=(a*b);break;
    case'/':document.getElementById("result").textContent=(a/b);break;
    case'%':document.getElementById("result").textContent=(a%b);break;

}
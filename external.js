
let value = prompt("What is the 'official' name of javascript",'');
if(value == 'ECMAScript'){
    alert("Right!");
}
else{ 
alert("You dont know this?ECMAScript it is!");
}


let number = prompt("ENTER THE NUMBER",'');
if (value > 0){
    alert("1");
}
else if (value < 0){
    alert("-1");
}
else {
    alert("0");
}

let num=10;
nextNum:
for(let i=2;i<=num;i++){
    for(let j=2;j<i;j++){
        if(i%j==0) continue nextNum;

    }
alert(i);
}

let browser = prompt("Enter the browser",'');
if (browser == "edge"){
    alert("You've got the edge!");
}
else if (browser == "chrome" || browser =="safari" || browser =="opera" || browser =="firefox"){
    alert("Okay we support these browsers too");

}
else alert("We hope that this page looks okay")

let a = prompt("Enter the value");
switch (a){
    case '0':
        alert("0")
    break;
    case '1':
        alert("1")
    break;
    case '2':
    case '3':
        alert("2,3")
    break;
}




function leastNum(m,n){
    if (m<=n?m:n)
    return;
}
let m = prompt("m= ",'');
let n = prompt("n=",'');

leastNum(m,n);

let x = prompt("a= ",'');
let n = prompt("b=",'');

function pow(x,n){
    let result = x;
    result=x;
    for (let i =1;i<=n;i++){
        result = result*x;
    }
    return result;
}
alert(x);

pow(3,2);

let age = promt("Enter your age",'');
let welcome;
if (age<18){
    welcome = function(){
        alert("hello");

    }
}
else welcome = function()
{
    alert("Greetings");
}

welcome();

function ask(question, yes, no) {
if (confirm(question)) yes();
else no();
}

ask("Do you agree?",
() => alert("You agreed."),
() => alert("You canceled the execution."));

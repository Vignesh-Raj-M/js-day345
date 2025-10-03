let name=prompt("Enter your name");
let year=prompt("Enter your Birth Year");
let city=prompt("Enter your city");
let age=(2025-year);
const userInfo = {
    name: name,
    birthYear: year,
    city: city,
    age: age
};

console.log("User Info :", JSON.stringify(userInfo));

if(age>=18){
    alert("Your age is:"+ age+"\nYou are Eligible!");

}else{
    alert("You are not Eligible!");
}
const date=new Date().getHours();
if(date<=11){
    alert("Good Morning-"+ name);
}else if(date>11 && date<16){
    alert("Good Afternoon-"+ name);
}else if(date>16 && date<21){
    alert("Good Evening-"+ name);
}else{
    alert("Good Night-"+ name);
}

let x=+prompt("Enter a Number1:");
let y=+prompt("Enter a Number 2:");
let z=prompt("Enter an operator:\n1.+\n2.-\n3.*\n4./");
switch(z){
    case "1":
        let a=x+y;
        alert("Your Answer is:"+a);
        break;
    case "2":
        let b=x-y;
        alert("Your Answer is:"+b);
        break;
    case "3":
        let c=x*y;
        alert("Your Answer is:"+c);
        break;
    case "4":
        let d=x/y;
        alert("Your Answer is:"+d);
}
alert("\Don't blame Anyone. Good people gives you Happiness. Bad people gives you a Lesson.\"");
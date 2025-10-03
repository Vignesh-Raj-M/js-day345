let name=prompt("Enter your name");
let email=prompt("Enter your email");
let age=prompt("Enter your age");
if (age>12 && name==name && email==email){
    alert("You are Eligible to play the quiz");
    let score=0;
    let q1=prompt("Q1: What is the capital of France?\n1.Paris \n2. New Delhi\n3. Kolkata");
    switch(q1){
        case "1":
            score++;
            break;
    }
    let q2=prompt("Q2: What is 0/0?\n1.0\n2.undefined\n3.1");
    switch(q2){
        case "2":
            score++;
            break;
    }
    let q3=prompt("Q3: Which is a programming language?\n1.HTML\n2.CSS\n3.JavaScript");
    switch(q3){
        case "3":
            score++;
            break;
    }
    let totalmarks=3;
    let percent=+(score/totalmarks)*100;
    let grade="";
    if(percent>=80){
        grade="A";
    }else if(percent>=70){
        grade="B";
    }else if(percent>=50){
        grade="C";
    }else{
        grade="D";
    }
    alert("score:"+ score +"\npercent:"+Math.round(percent) + "%\ngrade:"+ grade);

}else{
    alert("invalid details");
}
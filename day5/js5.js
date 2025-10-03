let name=prompt("Enter your name");
let email=prompt("Enter your email");
let age=prompt("Enter your age");
if (age>12 && name==name && email==email){
    alert("You are Eligible to play the quiz");
    let score=0;
    const questions=[
    { q1: " What is the capital of India?\n1. Mumbai\n2. New Delhi\n3. Kolkata" ,a:"2"},
    { q2: " Who is the Prime Minister of India?\n1. Narendra Modi\n2. Rahul Gandhi\n3. Arvind Kejriwal", a:"1"},
    { q3: " Which is the largest planet in our solar system?\n1. Earth\n2. Jupiter\n3. Saturn", a:"2"},
    { q4: " What is the chemical symbol for water?\n1. CO2\n2. H2O\n3. O2", a:"2"},
    { q5: " Who wrote 'Romeo and Juliet'?\n1. Charles Dickens\n2. William Shakespeare\n3. Mark Twain", a:"2"},
    { q6: " What is the smallest prime number?\n1. 0\n2. 1\n3. 2", a:"3"},
    { q7: " Which country is known as the Land of the Rising Sun?\n1. China\n2. Japan\n3. South Korea", a:"2"},
    { q8: " What is the hardest natural substance on Earth?\n1. Gold\n2. Iron\n3. Diamond", a:"3"},
    { q9: " Who painted the Mona Lisa?\n1. Vincent van Gogh\n2. Pablo Picasso\n3. Leonardo da Vinci", a:"3"},
    { q10: " What is the largest mammal in the world?\n1. Elephant\n2. Blue Whale\n3. Giraffe", a:"2"}
    ];
    const shuffled = questions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    for (let i = 0; i < selected.length; i++) {
        let userAnswer = prompt(selected[i][Object.keys(selected[i])[0]]);
        if (userAnswer === selected[i].a) {
            score++;
        }
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
    const userDetails={
        name:name,
        email:email,
        age:age,
        score:score,
        percent:Math.round(percent),
        grade:grade
    };
alert(JSON.stringify(userDetails));

}else{
    alert("invalid details");
}
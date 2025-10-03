let score = 0;


let q1 = prompt("Q1: What is 2 + 2?\n1. 3\n2. 4\n3. 5");
switch (q1) {
    case "2":
        score++;
        break;
}

let q2 = prompt("Q2: What is the capital of France?\n1. Paris\n2. London\n3. Rome");
switch (q2) {
    case "1":
        score++;
        break;
}

let q3 = prompt("Q3: Which is a fruit?\n1. Carrot\n2. Apple\n3. Potato");
switch (q3) {
    case "2":
         score++;
        break;
}

alert("Your Final Score: " + score + "/3");
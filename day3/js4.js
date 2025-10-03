let distance = prompt("Enter the distance in km:");
let transport = prompt("Enter transport type (bus, train, taxi):");

let farePerKm;
switch (transport) {
    case "car":
        farePerKm = 5;
        break;
    case "train":
        farePerKm = 3;
        break;
    case "bike":
        farePerKm = 15;
        break;
    default:
        alert("Invalid transport type!");
        farePerKm = 0;
}

if (farePerKm > 0) {
    let totalFare = distance * farePerKm;
    alert("Total fare for " + distance + " km by " + transport + " is: " + totalFare);
}
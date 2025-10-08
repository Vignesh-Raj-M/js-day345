try{
    let name = prompt("Enter your name:");
    if (!name) {
        alert("Name not entered. Exiting...");
    } else {
        let Order = confirm("Hello " + name + "! Do you want to order food?");
        if (!Order) {
            alert("Goodbye! See you next time!");
        } else {
            let menuText = "Menu:\n";
                menuText += "1. Pizza (₹150)\n";
                menuText += "2. Burger (₹100)\n";
                menuText += "3. Sandwich (₹80)\n";
            let choice = prompt(menuText + "Enter the number of your choice:");
            
            let menu = [
                { number: 1, item: "Pizza", price: 150 },
                { number: 2, item: "Burger", price: 100 },
                { number: 3, item: "Sandwich", price: 80 }
            ]; 

            let selected = menu.find(m => m.number == choice);
            if (!selected) {
                alert("Invalid choice!");
            } else {
                let quantity = prompt("Enter quantity:");
                quantity = Number(quantity);
                if (isNaN(quantity) || quantity < 1) {
                    alert("Invalid quantity!");
                } else {
                    let total = selected.price * quantity;
                    alert("You ordered " + quantity + " " + selected.item + (quantity > 1 ? "s" : "") + ". Total = ₹" + total);
                }
            }
        }
    }}catch(error){
    alert("Error occurred: " + error.message);
}
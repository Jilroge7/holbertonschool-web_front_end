/**
 * @param {string} itemName
*/

let stock = {
    macbook: "2",
    iphone: "4"
}

function processPayment(itemName) {
    console.log("Payment is being processed for item " + stock.itemName);
}

function processError(itemName) {
    console.log("No more " + stock.itemName + " in stock");
    console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment(), callbackError()) {
    console.log("Verifying the stock of " + stock.itemName);
    /* If there is enough stock of the item */
        callbackPayment();
    /* If there is NOT enough stock */
        callbackError();
}

let rlSync = require('readline-sync');
let computer = rlSync.question("Please enter the item you would like to purchase (Macbook, iPhone)");
processOrder(${computer});
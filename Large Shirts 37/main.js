// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a Function with by-defualt values
make_shirt("Large");
// Calling a Function now with Medium size and default message
make_shirt("Medium");
// Calling a Function now with Small Size and also print different message
make_shirt("Small", "I Love Javascript");

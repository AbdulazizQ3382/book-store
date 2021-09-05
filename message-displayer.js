function welcome_message(){
    console.log("Weclome to book store, How I can server?")
    console.log("----------------------------------------");
    console.log("choose 1 or 2 or 3:");
    console.log("1) Add a book")
    console.log("2) Search for a book")
    console.log("3) Buy a book")
}

function bookData_message(){
    console.log("Good you choosed add a book, now I want from you some data:")
}

module.exports = {welcome_message, bookData_message};
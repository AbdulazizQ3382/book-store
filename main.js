let prompt = require('prompt-sync')();
let display_messages = require("./message-displayer.js")
let Books = require("./book.js")

// display_message is an array containing functions that displays all the program messages.
display_messages.welcome_message();


let userService = prompt('Choose the service please: ');
let booksList = new Books([]);
switch(userService){
    case "1": 
        display_messages.bookData_message();
        // creating a new book list object, the constructor only requires an empty array
        let stopped = "1";
        let currentBooks;
        while(stopped !== "-1"){
            let id = prompt("Enter the id of the book: ");
            let title = prompt("Enter the title of the book: ");
            let author = prompt("Enter the author of the book: ");
            let price = prompt("Enter the price of the book: ");
            let quantity = prompt("Enter the quantity of the book: ");
            currentBooks = booksList.addBook(id,title,author,price,quantity);
            let doReapet = prompt("press any key if you want to add another book or -1 if you don't")
            console.log(currentBooks);
            if(doReapet === "-1")
                stopped = "-1";
        }
        booksList.writeBooksToFile();
    case "2":
       console.log(booksList.searchBook("34"));
    case "3":
}

// while(true){
// var n = prompt('How many more times? ');
// console.log("n is "+n)
// if(n == -1)break;
// }

const fs = require('fs');
class Books {
 constructor(listOfBooks){
     this.listOfBooks = listOfBooks;
 }

 addBook(...book){
    //  to copy all the data from json file to our array in the class
     this.listOfBooks = Object.assign(this.listOfBooks,this.retriveBookFromFile());
    //  Now we add more  data to the coppied array
     this.listOfBooks.push(book);
     return this.listOfBooks;
 }
 writeBooksToFile(){
     
    let data = JSON.stringify(this.listOfBooks, null, 2);
    fs.writeFileSync('bookDB.json', data);
    console.log("data added successfully")
 }

 retriveBookFromFile(){
    let books;
    let rawdata = fs.readFileSync('bookDB.json');
    books = JSON.parse(rawdata);
    return books;
 }

 searchBook(filterType){
         return this.retriveBookFromFile().filter( book => book[0] === filterType || book[1] === filterType || book[3] === filterType)
 }

}

module.exports = Books;
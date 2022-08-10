//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

const recipe = {
    title: "Mole",
    serves: 2,
    ingredients: ["Cinnamon", "Cumin", "Cocoa"]}
    console.log(`1. - ${recipe.title}`);
    console.log(`1. - Serves ${recipe.serves}`);
    console.log(`1. - Ingredients:`);
    for (i = 0; i < recipe.ingredients.length; i++) {
        console.log(`1. - ${recipe.ingredients[i]}`);
    }

    console.log("---------------------------");

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

const books = [
    {
        title: "Moby Dick",
        author: "Herman Melville",
        alreadyRead: true,
    },
    {
        title: "To Kill A Mockingbird",
        author: "Harper Lee",
        alreadyRead: true,
    },
    {
        title: "Frankenstein",
        author: "Mary Shelly",
        alreadyRead: false,
    }
]
let bookInfo = "";
function findBooks (obj) {
    for (let i = 0; i < obj.length; i++) {
        bookInfo = (`${obj[i].title} by ${obj[i].author}`);
        console.log("2.", bookInfo);
    }

}
findBooks(books)

console.log("---------------------------");

let bookRead = "";
function readBooks (obj) {
    for (let i = 0; i < obj.length; i++) {
 
   
    if  (obj[i].alreadyRead === true) {
        console.log(`2. You already read ${obj[i].title} by ${obj[0].author}`);
    }
    else { 
        console.log(`2. You still need to read ${obj[i].title} by ${obj[0].author}`);
    }
}
}
readBooks(books)

//write your code here


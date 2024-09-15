const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
//Destructuring

const book = getBook(2);

// const title = book.title;
// const author = book.author;
// author;
// title;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

// const primaryGenres = genres[0];
// const primaryGenres1 = genres[1];
// const primaryGenres2 = genres[2];
// const primaryGenres3 = genres[3];
// console.log(primaryGenres,primaryGenres1,primaryGenres2,primaryGenres3)

const [primaryGenres, secondaryGenres, ...otherGenres] = genres;
console.log(primaryGenres, secondaryGenres, otherGenres);

const newGenres = ["epic fantasy", ...genres];
newGenres;

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  // pages: 1210,
};
updatedBook;

// Template Literals

const summary = `${title}, a ${pages}--page long book, was author by ${author} in the year ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// Ternaries Instead of IF/ELSE Statements

const pageTernary = pages > 1000 ? "Over is thousand" : "less than 1000";
pageTernary;

console.log(`The book has ${pageTernary}`);

// Arrow Functions

// function getYear(str) {
//   return str.split("-")[0];
// }
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// Short-Circuiting And Logical Operators: &&/ ||, ??...

console.log(true && "something else");
console.log(false && "something else");

console.log(hasMovieAdaptation && "This book has a movie");

// Falsy values : null, 0 , undefined, "",
console.log("Ismail", "Another person");
console.log("" && "The the second person");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);

const countWrong = book.reviews.librarything.reviewsCount || "No data";
countWrong;

const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

// Optional Chaining Operator

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

// Functional Array Methods Map, Filter, Reduce

// Map Method

/*
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();

const x = [1, 2, 3, 4, 5, 6, 7].map((sqr) => sqr * sqr);
const z = x;
x;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

const longBooks = books.filter((book) => book.pages > 500);
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

// Array Reduce Method : The most versatile array method
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// Array sort Method
const y = [3, 7, 1, 9, 6];
const sorted = y.slice().sort((a, b) => b - a);
sorted;
y;

const sortedByPages = books.slice().sort((a, b) => a.spages - a.pages);
sortedByPages;

// Working With Immutable Arrays
// 1) Add book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;
*/
// Asynchronous JS

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("ismail");

// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const date = await res.json();
//   console.log(data);

//   return data;
// }

// const todos = getTodos();
// console.log(todos);
// console.log("Ismail");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("Ismail");

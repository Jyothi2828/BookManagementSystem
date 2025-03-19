const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    isbn: "9780743273565",
    description: "A novel set in the Roaring Twenties that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    isbn: "9780451524935",
    description: "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    isbn: "9780061120084",
    description: "A coming-of-age story that deals with serious issues like racial injustice and moral growth."
  }
];

function displayBookDetails() {
  console.log("displayBookDetails called"); // Debugging log
  const urlParams = new URLSearchParams(window.location.search);
  const bookTitle = urlParams.get('title');
  console.log("Book Title:", bookTitle); // Debugging log

  const book = books.find(b => b.title === bookTitle);
  console.log("Book Found:", book); // Debugging log

  if (book) {
    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-author').innerText = book.author;
    document.getElementById('book-genre').innerText = book.genre;
    document.getElementById('book-isbn').innerText = book.isbn;
    document.getElementById('book-description').innerText = book.description;
  } else {
    document.getElementById('book-info').innerText = 'Book not found.';
  }
}

function addToReserve() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookTitle = urlParams.get('title');
  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  const alreadyReserved = reservations.some(book => book.title === bookTitle);
  if (alreadyReserved) {
    alert('You have already reserved this book.');
    return;
  }

  const book = books.find(b => b.title === bookTitle);
  if (book) {
    reservations.push(book);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    alert('Book added successfully');
  } else {
    alert('Book not found.');
  }
}

function cancelReservation() {
  alert('Book reservation cancelled');
}

function toggleDropdown() {
  document.getElementById("menuDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function toggleDropdown() {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('show');
}

window.onload = displayBookDetails;

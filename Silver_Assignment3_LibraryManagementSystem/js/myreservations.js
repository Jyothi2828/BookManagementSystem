function showReservationAlert() {
    alert("Book reserved successfully!");
}

function showCancellationAlert() {
    alert("Your reservation has been canceled.");
}

function showAlreadyReservedAlert() {
    alert("You have already reserved this book.");
}

// Load Reservations
function loadReservations() {
    let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
    let container = document.getElementById("reserved-books");

    if (!container) {
        console.error("Element with ID 'reserved-books' not found.");
        return;
    }

    container.innerHTML = ""; // Clear previous content

    if (reservations.length === 0) {
        container.innerHTML = "<p>No books reserved.</p>";
        return;
    }

    reservations.forEach(book => {
        let returnDate = new Date(book.returnDate);
        let today = new Date();
        let daysLeft = Math.ceil((returnDate - today) / (1000 * 60 * 60 * 24));

        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card");
        bookDiv.innerHTML = `
            <p><strong>${book.title}</strong></p>
            <p>Return By: ${returnDate.toDateString()}</p>
            <p>Days Left: ${daysLeft}</p>
            <button onclick="cancelReserve('${book.title}')">Cancel Reservation</button>
        `;

        container.appendChild(bookDiv);
    });

    console.log("Reservations loaded:", reservations); // Debugging log
}

// Cancel Reservation
function cancelReserve(bookTitle) {
    let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
    reservations = reservations.filter(book => book.title !== bookTitle);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    showCancellationAlert();
    loadReservations(); // Refresh the list after cancellation
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    loadReservations();
});

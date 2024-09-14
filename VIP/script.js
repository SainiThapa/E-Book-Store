

document.getElementById("libraryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var isbn = document.getElementById("isbn").value;

    // Reset form
    document.getElementById("libraryForm").reset();

    // Display success message
    var messageElement = document.getElementById("message");
    messageElement.textContent = "Thank You For Your Search : " + title + " by " + author + " (ISBN: " + isbn + ")";
});
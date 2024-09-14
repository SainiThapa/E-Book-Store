
/* Java script for book a rooom card  */

document.getElementById('bookButton').addEventListener('click', function() {
    var date = document.getElementById('dateInput').value;
    var time = document.getElementById('timeInput').value;
    
    if (date && time) {
        var bookingMessage = document.getElementById('bookingMessage');
        bookingMessage.textContent = "Room booked successfully on " + date + " at " + time + ".";
        bookingMessage.style.color = "green";
    } else {
        alert("Please select both date and time.");
    }
});
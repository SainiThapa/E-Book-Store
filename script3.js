/* Java script fir latest news card  */
var newsData = [
    {
        title: "New Library Opening Hours",
        summary: "Starting next week, the library will be open from 9 AM to 7 PM, Monday through Friday.",
        date: "2024-05-01"
    },
    {
        title: "Library Summer Reading Program",
        summary: "Join us for our annual Summer Reading Program! Pick up your reading log at the library.",
        date: "2024-04-25"
    },
    {
        title: "Author Talk: Jane Smith",
        summary: "Renowned author Jane Smith will be visiting our library on May 15th to discuss her latest book.",
        date: "2024-04-20"
    }
];

// Function to display news articles
function displayNews() {
    var newsListDiv = document.getElementById('newsList');

    // Clear previous content
    newsListDiv.innerHTML = '';

    // Loop through newsData and create HTML elements for each news article
    newsData.forEach(function(news) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');

        var titleElement = document.createElement('div');
        titleElement.classList.add('news-title');
        titleElement.textContent = news.title;

        var dateElement = document.createElement('div');
        dateElement.classList.add('news-date');
        dateElement.textContent = news.date;

        var summaryElement = document.createElement('div');
        summaryElement.classList.add('news-summary');
        summaryElement.textContent = news.summary;

        articleDiv.appendChild(titleElement);
        articleDiv.appendChild(dateElement);
        articleDiv.appendChild(summaryElement);

        newsListDiv.appendChild(articleDiv);
    });
}

// Call the displayNews function when the page loads
window.onload = function() {
    displayNews();
};


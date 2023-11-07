//homepage.js
document.getElementByid("search-form").addEventListener("submit",function (Event) {
    event.preventDefault(); //prevent form submission

    const searchQuery = document.getElementById("searchBox").value;
    const searchFormat = document.getElementById("typeDrop").value;

    // Redirect to the search results page with query parameters

    if (searhFormat) {
        location.replace("`/search-results.html?q=${searchBox}&format=${typeDrop}`");

    } else {
        location.replace(`/search-results.html?q=${searchBox}`);
    }


});
var tvCharacters = ["Ron Swanson", "Leslie Knope", "Dwight Schrute", "Kenny Powers", "Chris Harrison", 
"Andy Dwyer", "Rachel Green", "Jim Halpert", "Walter White", "Phoebe Buffay", "Uncle Baby Billy", "Eric Cartman", "Stewie Griffin",
"Sheldon Copper", "Chandler Bing"];


function displayGif () {
    var character = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        character+ "&api_key=25fTdjuRA6Q33bvvOOxRhWMfNSd1V6Je&limit=10";    
}
function characterButtons () {
    $("#buttons-view").empty();

    for(i=0;tvCharacters.length; i++) {
        var a = $("<button>");
        a.addClass
    }

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(queryURL);

        console.log(response);
        
        var results=response.data;
}

}

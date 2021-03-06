//characters 
var characters = ["Ron Swanson", "Leslie Knope", "Dwight Schrute", "Kenny Powers", "Chris Harrison", 
    "Andy Dwyer", "Rachel Green", "Jim Halpert", "Walter White", "Phoebe Buffay", "Uncle Baby Billy", "Eric Cartman", "Stewie Griffin",
    "Sheldon Copper", "Chandler Bing"];
//loop for character buttons
for (let i=0; i<characters.length; i++) {
    var buttons = $("<button>").text(characters[i]);
    buttons.attr("data-character", characters[i]);
    buttons.addClass("gifButtons");
    $("#buttons-view").append(buttons);
}

//function to add buttons for new characters
$(".select-character").on('click', function(event) {
    event.preventDefault();
    let newChar = $("#charName").val().trim();
    characters.push(newChar);
    let newCharButton = $("<button>").text(newChar);
    newCharButton.attr("data-character", newChar);
    newCharButton.addClass("gifButtons");
    $("#buttons-view").append(newCharButton);
    $("#charName").val().trim();
}) 


$(document).on("click", ".imgGIF", function (event) {
    event.preventDefault();

    var clickedGif = $(this).attr("data-state");

    // Animate Gif
    if (clickedGif === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {    // Still Gif
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});


//click function to display gids
$(document).on('click', '.gifButtons' , function() {
    var character = $(this).attr("data-character");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        character + "&api_key=25fTdjuRA6Q33bvvOOxRhWMfNSd1V6Je&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            var results=response.data;
        for(var i=0; i <results.length; i++) {
            var staticGif = results[i].images.downsized_still.url;
            var animateGif = results[i].images.downsized.url;
            if (results[i].rating !== "r");
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rated: " + rating);
            var imgGIF =$("<img>");
            imgGIF.addClass("imgGIF");
            imgGIF.attr("src", staticGif);
            imgGIF.attr("data-state", "still");
            imgGIF.attr("data-still", staticGif);
            imgGIF.attr("data-animate", animateGif);
            gifDiv.prepend(p);
            gifDiv.prepend(imgGIF);
            $("#resultsBody").prepend(gifDiv);

            }
        });
});



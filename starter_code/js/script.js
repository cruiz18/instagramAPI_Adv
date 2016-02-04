// YOUR CODE GOES HERE
var clientID = "1ce17112b850e601f2181770fd4c0db2";

$(document).ready(function() {
    // your code here
    $("#search-btn").click(function() {
        var input = $("#search-query").val();

        searchFlickr(clientID, input, 10, function(photos) {
            for (var i = 0; i< photos.photo.length; i++) {

                $("#search-results").append( "<img src=" + photos.photo[i].url_m + ">");

              
                //select our list
            }
        });
    });


    $("#reset-btn").click(function() {
        $("#search-results").empty();
    });

});

//continue to add the pictures
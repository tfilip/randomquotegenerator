var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"


$(document).ready(function () {
    console.log("ready!");

    $("#share").on("click", function () {
        console.log("share clicked");
    });

    $.getJSON(url, getQuote, 'jsonp');

    $("#generate").on('click', function () {
        $.getJSON(url, getQuote, 'jsonp');
    });

    $(".fa-refresh").hover(function () {
        $(".fa-refresh").toggleClass("fa-spin");
    }, function () {
        $(".fa-refresh").toggleClass("fa-spin");
    });

    $(".fa-twitter").hover(function () {
        $(".fa-twitter").toggleClass("fa-pulse");
    }, function () {
        $(".fa-twitter").toggleClass("fa-pulse");
    });
});


var getQuote = function (data) {

    $("#quote").text(data.quoteText);
    if (data.quoteAuthor === '') {
        $("#author").text("Unknown");
    } else {
        $("#author").text("- " + data.quoteAuthor);
    }

    var shareText = encodeURIComponent(data.quoteText);

    $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + shareText);

}





(function($){




 $('#search-button').click(function() {
    var search = $('#search').val();
    window.location.href = 'result.html?search=' + search; //This line is edited
    $('.show-result').append( ' "' + search + '"');
    return false;
});

function getUrlVars() { // create a cool little function
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
});
return vars;
}

var search = getUrlVars()["search"]; //use that function
 $('.show-result').append( ' "' + search + '"'); //this is just one way to show the GET parameter

$('#sign-up-button').click(function() {
    window.location.href = 'sign-up.html';
    return false;
});







})(jQuery); // end private scope

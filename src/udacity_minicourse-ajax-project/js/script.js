
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var mapskey = '&key=' + config.GOOGLE_MAPS_KEY;
    var address = $('#street').val() + ', ' + $('#city').val();
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address + mapskey;

    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    return false;
};

$('#form-container').submit(loadData);

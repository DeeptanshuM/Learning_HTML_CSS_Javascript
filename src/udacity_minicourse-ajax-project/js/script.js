
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var cityStr = $('#city').val();

    var mapskey = '&key=' + config.GOOGLE_MAPS_KEY;
    var address = $('#street').val() + ', ' + cityStr;
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address + mapskey;

    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    var nytkey = config.NYT_KEY;
    var nytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    nytUrl += '?' + $.param({
            'q': cityStr,
            'sort': "newest",
            'api-key': nytkey
        });

    $.ajax({
        url: nytUrl,
        method:'GET',             //from NYT we 'get' JSON data.
    }).done(function(data) {
        $.each(data.response.docs, function() {
            var articleLink = '<a href="' + this.web_url + '">' + this.headline.main + '</a>';
            var articleLead = '<p>' + this.lead_paragraph + '</p>';
            $nytElem.append('<li class="article">' + articleLink + articleLead + '</li>');
        });
    }).fail(function() {
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });

    // Load Wikipedia articles
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='
        + cityStr + '&format=json';

    // Set a timeout of 8 seconds to get the Wikipedia articles
    var wikiRequestTimeout = setTimeout(function() {
        $wikiElem.text('failed to get wikipedia resources');
    }, 8000);

    $.ajax(wikiUrl, {dataType: 'jsonp'})
        .done(function(data) {
            var articleTitles = data[1];
            var articleUrls = data[3];

            $.each(articleTitles, function(i, title) {
                $wikiElem.append('<li><a href="' + articleUrls[i] + '">' + title + '</a></li>');
            });

            clearTimeout(wikiRequestTimeout);

        });

    return false;
};

$('#form-container').submit(loadData);

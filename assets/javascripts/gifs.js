
	 $('button').on('click', function() {
        var p = $(this).data('pokemon');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="item">')

                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);

                    var pokemonImage = $('<img>');
                    pokemonImage.attr('src', results[i].images.fixed_height.url);

                    gifDiv.append(p);
                    gifDiv.append(pokemonImage);

                    $('#gifAppearsHere').prepend(gifDiv);
                }

            });
    });


	   $('#searchBtn').on('click', function() {

	 	var search = $('#search-input').val().trim();
        
        $('#buttons').prepend('<button data-pokemon= >' + search + '</button>');

        return false;
          
        })


     

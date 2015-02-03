'use strict';

app.factory('Book', function($resource) {
	// return $resource('http://localhost:3000/books');

	var Book = {
		query: function() {
			return [
				{ title: 'Hänsel und Grätel', year: '1700' },
				{ title: '1984', year: '1948' }
			];
		}
	}

	return Book;
});

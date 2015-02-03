'use strict';

app.factory('Book', function() {
	var Book = {
		query: function() {
			return [
				{ title: 'Hänsel und Gretel', year: '1700' },
				{ title: '1984', year: '1948' }
			];
		}
	};

	return Book;
});

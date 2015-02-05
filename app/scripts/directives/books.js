'use strict';

app.directive('books', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/books.html',
		transclude: true
	};
});

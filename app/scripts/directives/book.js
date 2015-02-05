'use strict';

app.directive('book', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/book.html',
		scope: {
			title: '=',
			year: '='
		}
	};
});

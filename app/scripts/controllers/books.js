'use strict';

app.controller('BooksCtrl', function($scope, Book) {
	$scope.books = Book.query();
});

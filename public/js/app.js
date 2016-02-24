var app = angular.module('omdbApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'mainController'
    }),
    $routeProvider
      .when('/:movieID', {
        templateUrl: 'partials/movie.html',
        controller: 'showController'
      })
});

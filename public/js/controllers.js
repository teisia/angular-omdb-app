app.controller("mainController", function($scope, $routeParams, $http) {
  $scope.getMovie = function() {
    $http.get("https://www.omdbapi.com/?s=" + $scope.movieTitle).then(function(data){
      $scope.movies = [];
      data.data.Search.forEach(function(movie) {
        $scope.movies.push(movie)
      })
    })
  }
});

app.controller("showController", function($scope, $routeParams, $http) {
    $http.get("https://www.omdbapi.com/?i=" + $routeParams.movieID).then(function(data){
      $scope.showMovies = [];
      $scope.showMovies.push(data.data)
  })
})

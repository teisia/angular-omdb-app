app.controller("mainController", function($scope, $routeParams, $http) {
  $scope.getMovie = function() {
    $http.get("https://www.omdbapi.com/?s=" + $scope.movieTitle).then(function(data){
      $scope.movies = data.data.Search;
    })
  }
});

app.controller("showController", function($scope, $routeParams, $http) {
    $http.get("https://www.omdbapi.com/?i=" + $routeParams.movieID).then(function(data){  
      $scope.showMovie = data.data
  })
})

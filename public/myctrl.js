var myapp = angular.module("app",[]);
myapp.controller("myctrl",function($scope,$http){
  $scope.send = function(){
    console.log($scope.value);
    console.log($scope.value2);
    $http.post('/link', {'value': $scope.value,'value1':$scope.value2}).then(
      function(resp) {
        console.log(resp);
      },
      function(errorResp) {
        console.log(errorResp);
      }
    )

  }
});//end of controller

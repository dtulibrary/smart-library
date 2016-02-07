// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('smartlib', ['ionic'])

.controller('MainCtrl', function($scope, $http){

  $scope.valueArr = [0,0,0,0];
  $scope.doRefresh = function(){

    $http.get('http://192.168.1.64:3000/values.json').then(function(resp){
      $scope.allData = resp.data;

      // Sum all data
      for(item in $scope.allData){
        $scope.valueArr[0] += $scope.allData[item].light
        $scope.valueArr[1] += $scope.allData[item].sound
        $scope.valueArr[2] += $scope.allData[item].temp
      } 

      // Get the average
      for(item in $scope.valueArr){
        $scope.valueArr[item] /= $scope.allData.length
        $scope.valueArr[item] = Math.round($scope.valueArr[item])
      }

      $scope.sensorList = [
      { text: "Light", checked: true,  value: $scope.valueArr[0],  unit:"LUX" },
      { text: "Sound", checked: true,  value: $scope.valueArr[1] , unit:"dB"},
      { text: "Temp",  checked: false, value: $scope.valueArr[2] , unit:"°C"},
      { text: "CO2",   checked: false, value: 191, unit:"" }
      ];

      $scope.$broadcast('scroll.refreshComplete')
    }, function(err){
      console.log('ERR', err);
    })
  }

})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

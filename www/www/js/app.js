// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('smartlib', ['ionic'])

.controller('MainCtrl', function($scope, $http, $ionicSideMenuDelegate){

  msg = 22;
  $scope.lightSelection = 60;
  $scope.timeSelection = {};

  $scope.timeChange = function(){
    console.log($scope.timeSelection.minutes);
  }

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft()
  }

  $scope.getAllData = function(){
    console.log('Getting all data:');
    console.log($scope.timeSelection);
    $scope.valueArr = [0,0,0,0];
    
    $http({
      url : 'http://192.168.1.64:3000/values.json',
      method: "GET",
      params: { minutes : $scope.timeSelection.minutes }
    }).then(function(resp){
      console.log(resp);
      // Sum all data into empty array
      for(item in resp.data){
        $scope.valueArr[0] += resp.data[item].light
        $scope.valueArr[1] += resp.data[item].sound
        $scope.valueArr[2] += resp.data[item].temp
      } 

      // Get the average and round the value
      for(item in $scope.valueArr){
        $scope.valueArr[item] /= resp.data.length
        $scope.valueArr[item] = Math.round($scope.valueArr[item])
      }

      $scope.sensorList = [
      { text: "Light", checked: true,  value: $scope.valueArr[0],  unit:"LUX" },
      { text: "Sound", checked: true,  value: $scope.valueArr[1] , unit:"dB"},
      { text: "Temp",  checked: false, value: $scope.valueArr[2] , unit:"°C"},
      { text: "CO2",   checked: false, value: 191, unit:"" }
      ];

      $scope.$broadcast('scroll.refreshComplete');
    }, function(err){
      console.log('ERR', err);
    });
  }

  // Run once
  $scope.getAllData();

  $scope.doRefresh = function(){
    $scope.getAllData();
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

angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.alsoAList = $scope.listings;
    $scope.detailedInfo = undefined;
    $scope.CPPisBetter = "";
    $scope.Quake = 0;
    $scope.displayFirst = "Please search be typing in the name of the building";
    $scope.stuffToDisplay = "";
    $scope.tempName = "";
    $scope.tempCode = "";
    $scope.tempLat = "";
    $scope.tempLong = "";
    $scope.tempAddress = "";
    $scope.tempDeleting="";


    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      var tempEntry = {code:$scope.tempCode, name:$scope.tempName, coordinates: {latitude: $scope.tempLat, longitude:$scope.tempLong}, address: $scope.tempAddress};
      $scope.listings.push(tempEntry);
      console.log("pushing?");
    };

    $scope.deleteListing = function(index) {
      var toDelete = $scope.tempDeleting.toUpperCase();
      var found = false;
      for(k=0;k<$scope.listings.length;k++){
        temp = $scope.listings[k].name;
        if (temp.toUpperCase() == toDelete){
          found = true;
         break;
        }
        else{
          console.log("not found for delete");
        }
      }
        if (found == true){
          $scope.listings.splice(k,1);
          found = false;
          k = 0;
          console.log("spliced");
          $scope.stuffToDisplay = "";
        }
    };
    $scope.searchThruList = function(){
      var search = $scope.CPPisBetter.toUpperCase();
      var temp;
      for(i=0;i<$scope.listings.length;i++){
        temp = $scope.listings[i].name;
        if (temp.toUpperCase() == search){
          $scope.alsoAList = [$scope.listings[i]];
          console.log(temp);
          
        }
        else{
          console.log("not found");
        }
      }
  };
  $scope.reset = function(){
    $scope.alsoAList = $scope.listings;
  };
  $scope.displayStuff = function(info){
    $scope.stuffToDisplay = info;
    console.log(info);
  };
  }
]);
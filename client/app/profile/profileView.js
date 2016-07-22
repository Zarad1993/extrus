angular.module('RBKme.profileView', [])
.controller('profileViewController', function ($scope, $window, $mdDialog, user) {
  	
  	$scope.user = {};
  	$scope.user = user;

  	if(user.employed){
  		$scope.career="Yes, Thanks for Checking Up"
  	} else{
  		$scope.career="Not Yet"
  	}

	$scope.sameUser = function(){
		var token = $window.localStorage.getItem('com.RBKme');
		if(!token){
			return false;
		} else if($window.username !== $scope.user.username){
			return false;
		}
		return true;
	}

	$scope.hide = function() {
    	$mdDialog.hide();
	};
	
	$scope.cancel = function() {
    	$mdDialog.cancel();
	};

	// function to send back the answer to the main function
	// which is showProfile in the app.js to know whether you
	// want to edit the profile or not.
	$scope.answer = function(answer) {
    	$mdDialog.hide(answer);
	};
});


var app = angular.module('loginAuthentication', ['firebase']);

app.controller('LoginCtrl', ["$scope", "$firebase", "$window", "$location", function ($scope, $firebase, $window, $location ) {
  var ref = new Firebase("https://hellohi.firebaseio.com");

  // ------------------- Create test user -------------------
  /*ref.createUser({
      email: "rohini@firebase.com",
      password: "rohini"
    }, function(error, userData) {
      if (error) {
        switch (error.code) {
          case "EMAIL_TAKEN":
            console.log("The new user account cannot be created because the email is already in use.");
            break;
          case "INVALID_EMAIL":
            console.log("The specified email is not a valid email.");
            break;
          default:
            console.log("Error creating user:", error);
        }
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });*/
        
    // ------------------- Facebook login --------------------
    /*$scope.login = function(){
        console.log("login function");
        ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          // the access token will allow us to make Open Graph API calls
          console.log(authData.facebook.accessToken);
        }
      });
    };*/

    $scope.submitForm = function(isValid) {
      if(isValid) {
        //console.log("du skickar form!");
        ref.authWithPassword({
          email    : $scope.user.email,
          password : $scope.user.password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            $scope.user.email = "";
            $window.location.href = 'chat.html';   
          }
        });       
      } else {
        console.log("form is inalid");
        event.preventDefault();
      }  
    };
}]);
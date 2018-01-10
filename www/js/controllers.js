'use strict';
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', { scope: $scope })
        .then(function(modal) { $scope.modal = modal; });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {   $scope.modal.hide();  };

        // Open the login modal
        $scope.login = function() { $scope.modal.show(); };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() { console.log('Doing login', $scope.loginData);
         $timeout(function() { $scope.closeLogin();  }, 1000);
        };

})

.controller('firstController', function($scope, $location, $http, $rootScope, $ionicModal, AuthService) {

      //alert(localStorage.getItem("TokenData"));

          //  NOTE: THIS IS THE NOTIFICAITON KEY:
        // localStorage.setItem("TokenData", 'blackbox');

        $scope.noteToken = localStorage.getItem("TokenData");
      //     $scope.noteToken ="BLACK";

          $scope.email = "jlatouf2@gmail.com";   $scope.password = "jarredl";
          $scope.blue = function(){  console.log('white;');};
            /*   --------LOGIN MODAL-----------     */
        $scope.loginModal = function(){  $("#myModal").modal("show"); };

          /*   --------LOGIN FUNCTION-----------     */
        $scope.ServiceFunction5 = function () { AuthService.LoginExample3($scope.email, $scope.password, $scope.noteToken); $scope.closeLogin1(); };

        /*   --------LOGOUT MODAL-----------     */
        $scope.logoutFunction = function(){  AuthService.logout(); };

        /*   --------SOCKET EX-----------     */
        $scope.socketData = function(){ socket.emit('clientEvent', 'Sent an event from the client!'); };

        var currentLocation = window.location;
        console.log(currentLocation);



            // Template for Modal
        $ionicModal.fromTemplateUrl('templates/modals/loginmodal.html', { scope: $scope })
        .then(function(modal) {   $scope.modal1 = modal; });

        $scope.closeLogin1 = function() { $scope.modal1.hide();  };

        // Open the login modal
        $scope.loginMod = function() { $scope.modal1.show(); };

    })

.controller('ContactController', function($scope, $location, $http,  $state, $rootScope, AuthService, $cordovaDialogs, $cordovaToast, $ionicPlatform, $cordovaLocalNotification) {

        //  $cordovaDialogs.beep(3);


          $scope.dialog = function(){ $cordovaDialogs.alert('message', 'title', 'button name')
             .then(function() {   });
           };

        // NOTE: THIS WORKS FOR IOS:
        $scope.sendFirebasehttp12 = function(){
          $http({
          url : "https://fcm.googleapis.com/fcm/send",
          method : 'POST',
          headers : { 'Content-Type' : 'application/json',
          'Authorization': "key=AAAA0elGK7c:APA91bGMOeIMiLGKsu5EV6zvxdgJgiPJg6a-TBIVy3Uh1ihpAtAxm9EXFPIdVUyJmGRGCc8aD8bbS0R2Y4fGWw7kjwyoZiUmnFrqL83wd3KB0wqnMQRDZwVsrkeHUC4JGJ8RPhUpAelZ"   },
          data: ({"to": "dKDJ81CczpM:APA91bGziW_Xf6oyIimfPhoS1tAlHuWlxTVt6HEPyhirhCXk7T84oqLGr9dgerAfQiqa-9FulavrtAL0liBBXIn_NHdtB490_su4WAg8K4DN64N22WeNItunOf2g3vrO6SMcVT-qAh3O", "notification": {"title":"Test","body":"Test", "sound":"default"}})

          }).success(function(data){
              alert("login Successfully");  console.log(data);
          }).error(function(error){
              alert("login error");    console.log(error);
          });
        };

        // NOTE: THIS WORKS FOR ANDROID:

        $scope.sendFirebasehttp99 = function(){
          $http({
          url : "https://fcm.googleapis.com/fcm/send",
          method : 'POST',
          headers : { 'Content-Type' : 'application/json',
          'Authorization': "key=AAAA0elGK7c:APA91bGMOeIMiLGKsu5EV6zvxdgJgiPJg6a-TBIVy3Uh1ihpAtAxm9EXFPIdVUyJmGRGCc8aD8bbS0R2Y4fGWw7kjwyoZiUmnFrqL83wd3KB0wqnMQRDZwVsrkeHUC4JGJ8RPhUpAelZ"   },
          data: ({"to": "eFK_hHP3Rm4:APA91bHXo_G0ivKEQZ9_fLXhg6fCzC3SgeAxiLki0byU5lfOF6r75ZXvuZyINTs5R7LdlfGtTdmVZeYgnWeAToRAIA267FCiU5BxQl30HkZmhkCHTHqHH4KUKwF9vENhgHQCTjVbtH0S", "notification": {"title":"Test","body":"Test", "sound":"default", "click_action":"FCM_PLUGIN_ACTIVITY",  "icon":"fcm_push_icon"},  "priority":"high"})

          }).success(function(data){
              alert("login Successfully");
              console.log(data);

          }).error(function(error){
              alert("login error");
              console.log(error);

          });
        };


         $scope.getNotif = function(){

          FCMPlugin.getToken(function(token) {
               console.log(token);  window.alert(token);
              localStorage.setItem("TokenData", token);
              var myToken = localStorage.getItem("TokenData");
              window.alert(myToken);

              $http.post('https://thawing-ocean-11742.herokuapp.com/tokenReturned', {token: localStorage.getItem("TokenData")})
                 .then(function(data) {
                      alert('worked');   alert(data);
                      $scope.getToken = data;
                     //$scope.content = response.data;
                 }, function() { alert('didnt work'); });

                   FCMPlugin.onNotification(function(data) {
                      console.log(data);
                      window.alert('THIS WAS SELECTED ON NOTIFICATION!!')
                      window.alert(data);
                  });
              });
            };

            $scope.blueboy  = function() {

              window.FirebasePlugin.getToken(function(token) {
              // save this server-side and use it to push notifications to this device
              window.alert(token);
          }, function(error) {
              window.alert(error);
          });

             };


            $scope.getNotif = function(){
             FCMPlugin.getToken(function(token) {
                  console.log(token);  window.alert(token);
                 localStorage.setItem("TokenData", token);
                 var myToken = localStorage.getItem("TokenData");
                 window.alert(myToken);

                 $http.post('https://thawing-ocean-11742.herokuapp.com/tokenReturned', {token: localStorage.getItem("TokenData")})
                    .then(function(data) {
                         alert('worked');   alert(data);
                         $scope.getToken = data;
                        //$scope.content = response.data;
                    }, function() { alert('didnt work'); });

                      FCMPlugin.onNotification(function(data) {
                         console.log(data);
                         window.alert('THIS WAS SELECTED ON NOTIFICATION!!')
                         window.alert(data);
                     });
                 });
               };



          $rootScope.goback2 = function(){ console.log('clicked'); $state.go('home'); };
            //LOCALSTOREAGE IN ANGULARJS:
          $scope.setLocal = function () { localStorage.setItem("Name", "John");  };

          $scope.getLocal = function () { console.log(localStorage.getItem("Name"));  };

          $scope.removeLocal = function () { localStorage.removeItem("Name");   };

          $scope.getLocalbyKey = function () { console.log(localStorage.getItem("Name"));  };


              $scope.noteToken = localStorage.getItem("TokenData");

              console.log($scope.noteToken);

        $scope.fname = "Jarred"; $scope.lname = "Latouf"; $scope.email = "jlatouf2@gmail.com";
        $scope.password = "jarredl"; $scope.passwordConf = "jarredl";

        $scope.fname = {fname1 : "Jarred"};
        $scope.lname = {lname1 : "Latouf"};
        $scope.email = {email1 : "jlatouf2@gmail.comsadfasfafda"};
        $scope.password = {password1 : "jarredl"};
        $scope.passwordConf = {passwordConf1 : "jarredl"};


        $scope.ServiceFunction4 = function () {
            document.addEventListener("deviceready", function() {
              window.FirebasePlugin.getToken(function(token) {
              // save this server-side and use it to push notifications to this device
              // save this server-side and use it to push notifications to this device
            //  window.alert(token);
             localStorage.setItem("TokenData", token);
             var myToken = localStorage.getItem("TokenData");
             $rootScope.noteToken = myToken;
        //    window.alert(myToken);

           }, function(error) {
              window.alert(error);
          });
                        }, false);

          AuthService.RegisterExample4($scope.fname.fname1, $scope.lname.lname1, $scope.email.email1,
          $scope.password.password1, $scope.passwordConf.passwordConf1,  $rootScope.noteToken );
        };

       /*  $scope.ServiceFunction5 = function () {console.log("clicked22");AuthService.LoginExample3($scope.email, $scope.password);}; */

      //FACEBOOK SERVICE.JS LOGIN:
    //  $scope.Servicefacebook = function () { AuthService.facebookLogin(); };
      $scope.Servicefacebook = function () {
        document.addEventListener("deviceready", function() {
                window.FirebasePlugin.getToken(function(token) {
                // save this server-side and use it to push notifications to this device
                 window.alert(token);
               localStorage.setItem("TokenData", token);
               var myToken = localStorage.getItem("TokenData");
               $rootScope.noteToken = myToken;
               window.alert(myToken);

                window.alert(token);
            }, function(error) {
                window.alert(error);
            });
          }, false);
        AuthService.facebookLogin( $rootScope.noteToken);
      };


    // function myFunction6(){
       $scope.gettoken = function(){   alert(localStorage.getItem("Token"));  };


       $scope.foodItems = [{   name:'Noodles', price:'10', quantity:'1' },
          { name:'Pasta', price:'20',  quantity:'2'   },
          { name:'Pizza', price:'30',  quantity:'1'  },
          { name:'Chicken tikka',  price:'100',  quantity:'1'  }];


      })


.controller('ProfileCtrl', function($scope, $location, $http, $rootScope, AuthService) {


        //THIS CONFIRMS THE LOGIN FOR FACEBOOK
        /*
        setTimeout(function() {    AuthService.confirm();

          var bob2 = "http://graph.facebook.com/" +$scope.userid+ "/picture?type=square";
          console.log("This is the data that I am goign to pass: "+ bob2);
          console.log($scope.userid);
          $scope.black2 = bob2;
        }, 1000);
        */


          AuthService.confirm(); console.log($scope.userid);
          console.log($rootScope.useremail); console.log($scope.imageSaved);

        /*
        You can use following urls to obtain different sizes of profile images. Please make sure to add Facebook id to url.
        Large size photo https://graph.facebook.com/{facebookId}/picture?type=large
        Medium size photo https://graph.facebook.com/{facebookId}/picture?type=normal
        Small size photo https://graph.facebook.com/{facebookId}/picture?type=small
        Square photo https://graph.facebook.com/{facebookId}/picture?type=square

        //  http://graph.facebook.com/" +profile.id+ "/picture?type=square
        var bob = "http://graph.facebook.com/" +$scope.userid+ "/picture?type=square";
        console.log("This is the data that I am goign to pass: "+ bob);


          //THIS WAS POSTED IN APP UNTIL I TOOK IT OUT
        //https://graph.facebook.com/{facebookId}/picture?type=large&w‌​idth=720&height=720
        var bob2 = "https://graph.facebook.com/" +$scope.userid+ "/picture?type=large&w‌​idth=150&height=200";
        console.log("This is the data that I am goign to pass: "+ bob2);

        $scope.black = bob;
        console.log($scope.black);
        $scope.black2 = bob2;
        console.log($scope.black2);
        */

        //https://graph.facebook.com/{facebookId}/picture?type=large&w‌​idth=720&height=720
        var bob2 = "http://graph.facebook.com/" +$scope.userid+ "/picture?type=square";
        console.log("This is the data that I am goign to pass: "+ bob2);
        console.log($scope.userid); $scope.black2 = bob2; console.log($scope.black2);

        })




.controller('storeNamesCtrl', function($scope, $location, $http, $timeout, $cordovaGeolocation, $rootScope, $state, $ionicModal, $ionicHistory, AuthService) {

  /*
  ALL THAT HAS TO BE DONE IS TO:
  1) USE THE DISTANCE FORMULA FOR THIS ONE JUST LIKE IN peopleLine
  2) THE SMALLEST NUMBER IS THE CLOSEST TO YOU, AND THEN YOU JUST ARRANGE THEM
      LIKE PEOPLELINE AS WELL

  */


          $rootScope.goback2 = function(){
            console.log('clicked1'); $ionicHistory.goBack();
            //$state.go('home')
            //  $location.path('/home');
          //  window.location.href = "#/home";
          //  window.location.replace("#/home");
        };

          // Template for Storenames Modal
          $ionicModal.fromTemplateUrl('templates/modals/storemodal1.html', { scope: $scope
          }).then(function(modal) { $scope.modal2 = modal; });
          $scope.closestoremodal1 = function() { $scope.modal2.hide(); };
           $scope.openstoremodal1 = function() { $scope.modal2.show(); };


          // Template for Storenames Modal
          $ionicModal.fromTemplateUrl('templates/modals/storemodal2.html', { scope: $scope
          }).then(function(modal) { $scope.modal3 = modal; });
           $scope.closestoremodal2 = function() { $scope.modal3.hide(); };
           $scope.openstoremodal2 = function() { $scope.modal3.show(); };


          $timeout(function(){ $scope.modal2.show();   },0);



          $scope.findGPS = function(){
            setTimeout(function() {
              // Do something every 3 seconds
              var posOptions = {timeout: 10000, enableHighAccuracy: false};
                 $cordovaGeolocation.getCurrentPosition(posOptions)

                 .then(function (position) {
                    var lat22  = position.coords.latitude; var long22 = position.coords.longitude;

              $scope.$applyAsync(function () {
              $scope.latitude = lat22; $scope.longitude = long22; $scope.numberLinesZero = false;

                // NOTE: THIS STOPS THE LOADER
               document.getElementById("loader").style.display = "none";
               $rootScope.words = ''; $rootScope.wordspace = false;

               //saves coordinates in localstorage:
               localStorage.setItem("StoreLatitude", lat22);
               localStorage.setItem("StoreLongitude", long22);
                console.log(localStorage.getItem("StoreLatitude"));
                console.log(localStorage.getItem("StoreLongitude"));

              });
                   console.log(lat22 + '   ' + long22);
               }, function(err) {
                  console.log(err);
               });
              }, 3000);
          };


          $scope.$on('$stateChangeSuccess', function () {
            socket.emit('storeName', {postal: $scope.postal },function (data) {
                  console.log(data);    console.log(data[0].store);
                  $scope.numberLinesZero = false;
                  $scope.$apply(function () {   $scope.storewithNames = data;  });
             });
           });

         socket.on('updateStores', function (data) {
                console.log(data); $scope.numberLinesZero = false;
               $scope.$apply(function () { $scope.storewithNames = data;  });
         });


          /*   --------STARTPAGE FUNCTION-----------     */
                startPage();

          function startPage () {
              $scope.numberLinesZero = true;   $scope.findGPS();
              $rootScope.words = 'Please wait a moment for coordinates';  $rootScope.wordspace = true;
          }


          /*   --------GETS STORES-----------     */
          function getStoreNamesAfterCoordinates () {
                 socket.emit('storeName', {postal: $scope.postal },function (data) {
                     console.log(data); console.log(data[0].store);
                   $scope.numberLinesZero = false;
                   $scope.$apply(function () { $scope.storewithNames = data; });
                 });
            }


            socket.on('updateStores', function (data) {
                   console.log(data);  $scope.numberLinesZero = false;
                  $scope.$apply(function () {  $scope.storewithNames = data;  });
            });


            /*   --------SEARCHES STORES-----------     */
          $scope.searchStores = function(){
                socket.emit('storenameSearch',  {store: $scope.storesearchName },function (data) {
                  console.log("Data is returned: " + data);
                     $scope.$apply(function () { $scope.storewithNames = data; });
                });
            };


               $scope.storeName ={sname:""};

              /*   --------ADDS STORE TO DB-----------     */
            $scope.addStore1 = function(name){
                  if ( $scope.storeName.sname == '') {
                    console.log('Please enter a name');
                      } else{
                      socket.emit('addStore',  {store : $scope.storeName.sname, email: $scope.useremail, postal: $scope.postal, latitude: localStorage.getItem("StoreLatitude"),
                        longitude: localStorage.getItem("StoreLongitude"), Adminpassword: $scope.usertoken },function (data) {
                           $scope.failedLogin = true; console.log(data);
                        //  $scope.$apply(function () { $scope.failedData = data;  });

                           $scope.failedData = data;

                              $timeout(function () { $scope.failedLogin = false; console.log('BLUE'); }, 3000);
                          //  $scope.storeName.sname == '';
                      });
                   }
              };

          socket.on('addStorename', function (data) {
                 console.log($scope.storewithNames); console.log(data);
                 $rootScope.successful = true;
                 $scope.$apply(function () { $scope.storewithNames.push(data); });
               setTimeout(function(){ stopSuccessBar(); }, 3000);
          });


          /*   --------TIMEOUT FCN-----------     */
          function stopSuccessBar () {
              $scope.$apply(function () { $rootScope.successful = false; console.log($scope.successful); });    }

            /*   --------DELETENAME-----------     */

          $scope.deleteName2 = function(name) {
              console.log("name is: "+name);  $scope.storeName2 = name;
              console.log($scope.storeName2);
               socket.emit('deleteStore44',  {store:  $scope.storeName2  },function (data) {
               console.log(data); alert(data);
             });
           };

        socket.on('deleteUpdate', function (data) {
              $scope.$apply(function () {   console.log(data); $scope.storewithNames = data; });
        });

          /*   --------DELETE MODE TOGGLE-----------     */
          $scope.deleteMode = function(){   $rootScope.deleteButton = true; $scope.closestoremodal2();   };

            /* ----------EXIT DELETE MODE -------------- */
           $scope.exitDeleteMode = function(){    $rootScope.deleteButton = false;  };

             /*   --------LOCATION DATA ON PAGE-----------     */
        	$scope.grabStuff = function(names){
              $rootScope.grabStorename = names; console.log('GrabStuff');
              localStorage.setItem("StoreName", $scope.grabStorename);
               console.log(localStorage.getItem("StoreName"));
        		};

    })


.controller('StorelinesCtrl', function($scope, $location, $ionicModal, $timeout, $cordovaGeolocation, $http, $rootScope, $state, $ionicHistory) {


        console.log(localStorage.getItem("StoreName"));
        console.log(localStorage.getItem("StoreLatitude"));
        console.log(localStorage.getItem("StoreLongitude"));
        $scope.grabStorename = localStorage.getItem("StoreName");


       $rootScope.goback2 = function(){ console.log('clicked2');  $ionicHistory.goBack(); };

      // Template for Storenames Modal
      $ionicModal.fromTemplateUrl('templates/modals/linemodal1.html', { scope: $scope
      }).then(function(modal) { $scope.modal4 = modal; });
      $scope.closelinemodal1 = function() {   $scope.modal4.hide(); };
      $scope.openlinemodal1 = function() { $scope.modal4.show(); };


      // Template for Storenames Modal
      $ionicModal.fromTemplateUrl('templates/modals/linemodal2.html', {
        scope: $scope
      }).then(function(modal) { $scope.modal5 = modal; });
      $scope.closelinemodal2 = function() {  $scope.modal5.hide(); };
      $scope.openlinemodal2 = function() { $scope.modal5.show();  };


      $scope.whiteLines = function(){
        //THIS WILL ALLOW THE TABLE TO BE EMPTY

        if ($scope.numberLines === 0) {
            $rootScope.numberLinesZero = true;
            console.log('data length is 0');
         } else if($scope.numberLines > 0) {
            $rootScope.numberLinesZero = false;
           }

       };


       $scope.$on('$stateChangeSuccess', function () {
         console.log('STATECHANGE ON!!!' + localStorage.getItem("StoreName"));
         socket.emit('numberofLines',  {store:  localStorage.getItem("StoreName")  },function (data) {
           console.log(data); console.log(data.length);
             $rootScope.numberLines= data.length;   $scope.countries = data;
             $scope.$apply(function () {
                      $scope.whiteLines();
                });
         });
        });


         /*   --------DELETE MODE-----------     */
         $scope.deleteMode = function(){     $rootScope.deleteButton = true; $scope.closelinemodal1();    };

         /* ----------EXIT DELETE MODE -------------- */
          $scope.exitDeleteMode = function(){     $rootScope.deleteButton = false;    };

         /*   --------LINE NUMBERS-----------     */

        $scope.One = function(){     $rootScope.addNumberDB = 1;  $scope.addLine1(); $scope.closelinemodal2();  };

        $scope.Two = function(){    $rootScope.addNumberDB = 2;   $scope.addLine1(); $scope.closelinemodal2();   };

        $scope.Three = function(){   $rootScope.addNumberDB = 3;   $scope.addLine1(); $scope.closelinemodal2();   };

        $scope.Four = function(){    $rootScope.addNumberDB = 4;    $scope.addLine1(); $scope.closelinemodal2();  };

        $scope.Five = function(){     $rootScope.addNumberDB = 5;   $scope.addLine1(); $scope.closelinemodal2();   };


          /*   --------LINE FCN-----------     */

     $scope.addLine1 = function(){
       $rootScope.numberLinesZero = false;
          console.log("Number chosen: " + $scope.addNumberDB);   console.log("Token: " + $scope.usertoken);
            //           if ( $scope.grabStorename == undefined) {
           if ( localStorage.getItem("StoreName") == undefined || null) {
             console.log('Please get store name!');
               } else{
              socket.emit('addLine1',  {store : localStorage.getItem("StoreName"),
              line: $scope.addNumberDB, lineAdmin: "1" },function (data) {
                console.log(data);
                //    THIS ADD SUCCESS BAR:
                  $scope.failedData = data; $scope.failedLog = true;
                //  setTimeout(function(){ stopFailureBar(); }, 3000);
                  $timeout(function () { $scope.failedLog = false; }, 3000);
               });
             }
       };

       /*   NOTE THIS MAY CAUSE SOME PROBLEMS IF SAVED NAME DOES NOT EQUAL DATA.STORE   */

       socket.on('addLineStuff', function (data) {
         if(localStorage.getItem("StoreName") == data.store) {
              console.log(data); $rootScope.successful = true;  $scope.countries.push(data)
              $timeout(function () { $rootScope.successful = false; }, 3000);
              }
       });


       /*   --------TIMEOUT-----------     */
       function stopSuccessBar () { $scope.$apply(function () { $rootScope.successful = false; });  }


       /*   --------DELETE MODE-----------     */
        $scope.deleteLine = function(name) {
          console.log("line is: "+name);   console.log("store name: "+ $scope.grabStorename);
             socket.emit('deleteselectedLine',  {line : name, store: localStorage.getItem("StoreName")},function (data) {
            console.log(data);  alert(data);
            });
        };

        socket.on('deleteLinesUpdate', function (data) {
            console.log(data);  console.log($scope.grabStorename);
            if (data === '') {
              console.log('the data was deleted!');
              $scope.$apply(function () { $scope.countries = data;  });
            } else if (localStorage.getItem("StoreName") === data[0].store ) {
              $scope.$apply(function () { $scope.countries = data;    });
            }
        });


            /*   --------GRABS LINE NAME & CHECKS ADMIN-----------     */
      	$scope.checkLineAdminFcn = function(names){
          $rootScope.grabLineNumber = names;
          console.log (" LINE NUMBER: " + $scope.grabLineNumber);

          localStorage.setItem("LineNumber", $scope.grabLineNumber);
           console.log(localStorage.getItem("LineNumber"));

            socket.emit('checkLineAdmin',  {store : $scope.grabStorename, line: $scope.grabLineNumber,
                Adminpassword: $scope.usertoken },function (data) {
            console.log(data);
           });
      		};

       })


.controller('PeoplelineCtrl', function($scope, $location, $http, $ionicModal, $interval, $ionicHistory, $rootScope, $timeout, $state, $cordovaGeolocation) {

        window.addEventListener("focus", () => socket.connect());

        console.log('THIS IS THE LINENUMBER: '+localStorage.getItem("LineNumber"));
         console.log('THIS IS THE STORENAME: '+localStorage.getItem("StoreName"));

        $scope.myObj = { "color" : "white", "background-color" : "coral" };


        /* ----------CLOCK 1 --------------

        function clock() {
          // We create a new Date object and assign it to a variable called "time".
        var time = new Date(),

            // Access the "getHours" method on the Date object with the dot accessor.
            hours = time.getHours(),
             // Access the "getMinutes" method with the dot accessor.
            minutes = time.getMinutes(),
             seconds = time.getSeconds();

        document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
          function harold(standIn) {
            if (standIn < 10) { standIn = '0' + standIn;  }
            return standIn;
          }
        }
        setInterval(clock, 1000);
*/
      //  var now = new Date();
      //  console.log(now.addMinutes(50));


      /* ----------CLOCK 2 -------------- */

        var tick = function() { $scope.clock = Date.now() ;  }
        tick();
        $interval(tick, 1000);

        //THIS IS AN EXAMPLE I MADE TO SHOW THAT I COULD ADD TO CLOCK VALUE
        var blue = Date.now();
        console.log(blue * 30);


        var d = new Date();
        var v = new Date();
        v.setMinutes(d.getMinutes()+30);
        console.log(v);


        $scope.message = {time :''};

      //  $scope.message ={body:"Your turn is up!"};

        $scope.addWait_time = function(name){
           if ( $scope.message.time ==='') {
             console.log('Please enter a time');
           }  else if ( $scope.message.time === 0 || $scope.message.time ===  null) {
             $scope.yellow = "";
             console.log('Please enter a time');
               } else{
                 localStorage.setItem("wait_time", $scope.message.time);
                 console.log("Waittime!:"+ localStorage.getItem("wait_time"));

                // $scope.yellow = 5+' minutes';
                 $scope.yellow = "AVERAGE WAIT TIME IS: " + localStorage.getItem("wait_time") + " minutes";

            }
        };

      //  $interval(tick, 1000);

    //  $scope.countDown = 500;
    //  $interval(function(){console.log($scope.countDown--)},1000,0);



        /* ----------CLOCK 3 -------------- */

        var add_minutes =  function (dt, minutes) {
            return new Date(dt.getTime() + minutes*60000);
      }
      console.log(add_minutes(new Date(2014,10,2), 30).toString());


        /* ----------VALIDATION -------------- */

         $scope.nodeValidation = function(){
          $http.post('https://lineups-adminone.herokuapp.com/polling', {"email": "jlatouf2@gmail.com"})
           .then(function(data) {
               //First function handles success
               console.log('worked');  console.log(data);
               //$scope.content = response.data;
           }, function(data) {
           });
         };

         $scope.nodeValidation();

         socket.emit('poll', {},function (data) { console.log('worked!');  console.log(data);   });


          $scope.nodeValidation = function(){
            $http.post('https://lineups-adminone.herokuapp.com/stuffwhite', {"email": "jlatouf2@gmail.com"})
             .then(function(data) {
                 //First function handles success
                 console.log('worked');
                  console.log(data); console.log(data.data); console.log(data.data[0]); console.log(data.data[1]);
                  $scope.validationData = data.data;

                 //$scope.content = response.data;
             }, function(data) {
                 //Second function handles error
                 console.log('didnt work');
                 console.log(data); console.log(data.data); console.log(data.data[0]);
                 console.log(data.data[1]); $scope.validationData = data.data;
             });

           };

           /* ----------MODALS -------------- */

          $rootScope.goback2 = function(){ console.log('clicked3'); $ionicHistory.goBack(); };

          // Template for Storenames Modal
          $ionicModal.fromTemplateUrl('templates/modals/peoplemodal1.html', {   scope: $scope
          }).then(function(modal) { $scope.modal6 = modal; });
          $scope.closepeoplemodal1 = function() { $scope.modal6.hide();  };
          $scope.openpeoplemodal1 = function() { $scope.modal6.show();  };

          // Template for Storenames Modal
          $ionicModal.fromTemplateUrl('templates/modals/peoplemodal2.html', { scope: $scope
          }).then(function(modal) {   $scope.modal7 = modal; });
          $scope.closepeoplemodal2 = function() { $scope.modal7.hide(); };
          $scope.openpeoplemodal2 = function() { $scope.modal7.show(); };


          // Template for Storenames Modal
          $ionicModal.fromTemplateUrl('templates/modals/peoplemodal3.html', { scope: $scope
          }).then(function(modal) { $scope.modal8 = modal; });
          $scope.closepeoplemodal3 = function() { $scope.modal8.hide(); };
          $scope.openpeoplemodal3 = function() { $scope.modal8.show(); };


           /* ----------GET PEOPLE FCN -------------- */

         console.log(localStorage.getItem("StoreName"));    console.log(localStorage.getItem("StoreLatitude"));
         console.log(localStorage.getItem("StoreLongitude"));  console.log(localStorage.getItem("LineNumber"));

         $rootScope.grabStorename = localStorage.getItem("StoreName");
            $rootScope.grabLineNumber = localStorage.getItem("LineNumber");


            /* ----------ON/OFF BUTTON -------------- */

            $scope.selected = false;

        $scope.button1 = function () {
            //do logic for button 1
            $scope.selected = !$scope.selected;    console.log('btn1 clicked');
            console.log('THE AUTOMATIC BUTTON IS TURNED ON!');
              /*
              IF YOU WANT TO KEEP THE LOOP GOING WHEN THIS IS ON: ALL I HAVE TO DO:
              1) ADD AN  if($scope.notifyloop == true) { $scope.autoNotify();  }
                  in the $stateChangeSuccess function below. */
        };

        $scope.button2 = function () {
            //do logic for button 2
            $scope.selected = !$scope.selected;   console.log('btn2 clicked');
            console.log('AUTOMATION TURNED OFF');
            $scope.autoNotify();
        };


      //THIS IS CALLED FROM JAVASCRIPT:
      $scope.myfunction22 = function () {  confirm('CLICKED FROM JAVASCRIPT!');  };


      /* ----------GET PEOPLE FCN -------------- */

      $scope.$on('$stateChangeSuccess', function () {
            socket.emit('getPeopleLine', {store : localStorage.getItem("StoreName"),
            line: localStorage.getItem("LineNumber"), Adminpassword: $scope.usertoken },function (data) {
                $scope.$apply(function () {
                  console.log(data);
                   $scope.people = data;

                //   data.put("value1", 1);

                //I FINALLY FIGURED OUT HOW TO ADD DATA TO EACH ROW OF AN OBJECT:
                // THEN USE: {{person.propertyTwo}}


                  //  data[0]['propertyTwo'] = 'wait time: '+5+' min';
                  //  data[1]['addstuff'] = 'sounds good';

                  //  data[1]['email'] = 'jayjay';

                  //  console.log(data);


                 });
          /*vTO MAKE THE AUTO MESSAGE:
            1) HAVE TO TAKE DATA IN ARRAY, THEN MANUALLY SORT THE DATA BASED ON WHICH BUTTON IS PRESSED....
                IE... IF POSITION BUTTON IS PRESS AND IF DISPLACEMENT BUTTON IS PRESSED....
            2) press button, then it passes info*/

            console.log(data);
            data.sort(function (a, b) {
                return a.created.localeCompare(b.created);
            });
              console.log(data); console.log(data[0]);
                $rootScope.emailNotify = data[0].email;
                $rootScope.notificationNotify = data[0].notificationkey;

               $scope.findGPS();
               //$timeout(function () { $scope.autoNotify();  }, 3000);

           });
      });

      /* ----------AUTO NOTIFY LOOP -------------- */

        $scope.autoNotify = function() {
          console.log($scope.emailNotify); console.log($scope.notificationNotify);
           var not = $scope.notificationNotify;

                if (window.confirm("Are you sure you would like to send a notification to !" +  $scope.emailNotify) === true) {
                    console.log( "You pressed OK!");
                      $http({
                      url : "https://fcm.googleapis.com/fcm/send",
                      method : 'POST',
                      headers : { 'Content-Type' : 'application/json',
                      'Authorization': "key=AAAA0elGK7c:APA91bGMOeIMiLGKsu5EV6zvxdgJgiPJg6a-TBIVy3Uh1ihpAtAxm9EXFPIdVUyJmGRGCc8aD8bbS0R2Y4fGWw7kjwyoZiUmnFrqL83wd3KB0wqnMQRDZwVsrkeHUC4JGJ8RPhUpAelZ"   },
                      data: ({"to": not, "notification": {"title":"Lineups","body": "Your next in line", "sound":"default"}})
                              //"Your Turn is up"
                      }).success(function(data){
                          alert("Successfully Passed Notification");
                          console.log(data);

                      }).error(function(error){
                          alert("That user does not have a notifivation key:");
                          console.log(error);
                      });
                } else {   console.log( "You pressed Cancel!");   }

          };

          $scope.notifyDeleteperson = function() {
                console.log("Email: " + $scope.emailNotify);
              socket.emit('deletePersonnotify', {email : $scope.emailNotify, store : $scope.grabStorename,
                line: $scope.grabLineNumber },function (data) {
               $scope.$apply(function () { console.log(data);
                  //$scope.people = data;
               });
            });
          };


          socket.on('deletePersonback', function (data) {
              console.log(data);  console.log($scope.grabStorename);
              if (data === '') {
                console.log('the data was deleted!');   $scope.$apply(function () { $scope.people = data; });
              } else if ($scope.grabStorename === data[0].store && $scope.grabLineNumber === data[0].line) {
                $scope.$apply(function () { $scope.people = data;
                  /******   NOTE: //THIS RETURNS THE PEOPLE AFTER DELETE AND STARTS THE LOOPS AGAIN!  ******/
                  $scope.autoNotify();
                });
              }
          });


        /*   THE ONLY THINGS THAT I HAVE TO ADD:
          1) COPY THE DELETE SOCKET FUNCTION, REPLACE IT WITH ANOTHER IDENTICAL ONE [IN BACKEND AS WELL],
              AND DO THE SAME WITH THE SOCKET.ON FUNCTION
          2) THEN ADD THE $scope.autoNotify() at end which will keep the loop going.

          socket.on('deletePeople55', function (data) {
              console.log(data);  console.log($scope.grabStorename);
              if (data == '') {
                console.log('the data was deleted!');   $scope.$apply(function () { $scope.people = data; });
              } else if ($scope.grabStorename == data[0].store && $scope.grabLineNumber == data[0].line) {
                $scope.$apply(function () { $scope.people = data; $SCOPE.AUTONOTIFY(); });
              }
          });
           */




        $scope.findDistance22 = function(index, email, store, line, created, notificationkey){
            console.log(email); console.log(store); console.log(line);
            console.log(created); console.log(notificationkey);

            $rootScope.detailEmail = email;  $rootScope.detailStore = store;
            $rootScope.detailLine = line;  $rootScope.detailCreated = created;
            $rootScope.detailNotification = notificationkey;

            console.log(index);
            if (index === 0) {
                  console.log('the number is 0');
                  /*
                  $scope.grabStuff = function(notificationkey, email){
                        console.log( notificationkey);   console.log( email);
                          var not = notificationkey; console.log(not);
                        if (window.confirm("Are you sure you would like to send a notification to !") == true) {
                            console.log( "You pressed OK!");
                              $http({
                              url : "https://fcm.googleapis.com/fcm/send",
                              method : 'POST',
                              headers : { 'Content-Type' : 'application/json',
                              'Authorization': "key=AAAA0elGK7c:APA91bGMOeIMiLGKsu5EV6zvxdgJgiPJg6a-TBIVy3Uh1ihpAtAxm9EXFPIdVUyJmGRGCc8aD8bbS0R2Y4fGWw7kjwyoZiUmnFrqL83wd3KB0wqnMQRDZwVsrkeHUC4JGJ8RPhUpAelZ"   },
                              data: ({"to": not, "notification": {"title":"Lineups","body":localStorage.getItem("messageBody"), "sound":"default", "click_action":"FCM_PLUGIN_ACTIVITY"}})
                                      //"Your Turn is up"
                              }).success(function(data){
                                  alert("Successfully Passed Notification");
                                  console.log(data);

                              }).error(function(error){
                                  alert("That user does not have a notifivation key:");
                                  console.log(error);
                              });
                        } else {
                            console.log( "You pressed Cancel!");
                        }
                   };
                  */
            }
        };

        //$timeout(function () { $scope.findDistance22();  }, 3000);



        var array = [
            { id: 1, start: "2016-12-07T13:00:00", subject: "test1" }, { id: 2, start: "2016-12-07T09:00:00", subject: "test2" },
            { id: 3, start: "2016-12-07T10:00:00", subject: "test3" }, { id: 4, start: "2016-12-07T07:00:00", subject: "test4" },
            { id: 5, start: "2016-12-07T14:00:00", subject: "test5" }  ];

        array.sort(function (a, b) { return a.start.localeCompare(b.start);  });
        console.log(array);

                //THIS IS THE ONE THAT WORKS!

        var array2 = [
          { _id: '5a3a97c33f3d3b707c13831f', line: '2', store: 'Bedboye3',  __v: 0, created: "2017-12-20T17:02:59.694Z" },
          { _id: '5a3afbe53444f0753d51c16f', email: 'jlatouf2@gmail.com77', line: '2', store: 'Bedboye3', __v: 0, created: '2017-12-21T00:10:13.245Z' },
          { _id: '5a3b01743444f0753d51c170', email: 'jlatouf2@gmail.com22', line: '2', store: 'Bedboye3',
          distance: '0.0015307120357972858',   __v: 0, created: '2017-12-21T00:33:56.482Z' } ];

          array2.sort(function (a, b) { return a.created.localeCompare(b.created);  });
          console.log(array2);


        var cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}];

        cars.sort(function(a, b){return a.year - b.year});

        console.log(cars);



          /*      1)----------GETS COORDINATES OF LINE -------------- */

            socket.emit('getLineCoordinates', {store : $scope.grabStorename},function (data) {
                  console.log(data); // $scope.places = data;
                  if (data !== '') {
                    console.log(localStorage.getItem("StoreLatitude"));
                    console.log(localStorage.getItem("StoreLongitude"));
                    $rootScope.storelatitude = localStorage.getItem("StoreLatitude");
                     $rootScope.storelongitude = localStorage.getItem("StoreLongitude");

                //  $rootScope.storelatitude = data[0].latitude;
                //  $rootScope.storelongitude = data[0].longitude;
                  console.log('storelatitude: '+ $scope.storelatitude);
                  console.log('storelongitude: '+ $scope.storelongitude);
                }
              });

              /*  4 ----------CALCULATES DISTANCE BETWEEN COORDINATES -------------- */

            $scope.findDistance = function(){
              if ($scope.storelatitude !== null) {
           var newPoint33 = distance($scope.storelatitude, $scope.storelongitude,
             $scope.latitude33, $scope.longitude33, 'K'); console.log(newPoint33);

             $scope.DisplacementCalc = true;
             $scope.showfinalCalc = true; $scope.finalCalc = newPoint33;

             $timeout(function () { $scope.DisplacementCalc = false;  }, 3000);

           } else  if ($scope.storelatitude === null){
                $scope.failedLog = true;
                $scope.failedData = 'This line does not have starting coordinates!';
                  $timeout(function () { $scope.failedLog = false;  }, 3000);
           }
         };

         /*   3)    ----------COORDS FCN -------------- */

           $scope.findGPS = function(){
              setTimeout(function() {
               // Do something every 3 seconds
               var posOptions = {timeout: 10000, enableHighAccuracy: false};
                  $cordovaGeolocation.getCurrentPosition(posOptions)

                  .then(function (position) {
                     var lat33  = position.coords.latitude;  var long33 = position.coords.longitude;

          //   $scope.$applyAsync(function () {
               $rootScope.latitude33 = lat33;        $rootScope.longitude33 = long33;
              console.log(lat33 + '   ' + long33);
              $scope.findDistance();

                }, function(err) {  console.log(err)  });
              }, 1000);
             };


             // 2)   STARTS DISTANCE CALC:
             $scope.findGPS();

        $scope.getStoreCords = function() {
          socket.emit('getLineCoordinates', {store : $scope.grabStorename},function (data) {
            $scope.$apply(function () { console.log(data);    $scope.places = data;  });
         });
       };


       $scope.addnameLine ={line:""};
       $scope.addnameLine ={person:'jlatouf33@gmail.com'};

      /* ----------ADDPEOPLE FUNCTION 2 -------------- */

    $scope.addpersonAfter = function(){    console.log($scope.addnameLine.line); console.log($scope.addnameLine.person);
       socket.emit('addPerson244', {store : $scope.grabStorename, line: $scope.grabLineNumber,
              email: $scope.addnameLine.person, fullname: $scope.fullName,  longitude: $scope.longitude,
              latitude: $scope.latitude, distance: $scope.finalCalc, number: $scope.addnameLine.line,
              Adminpassword: $scope.usertoken },function (data) {

          $scope.$apply(function () {  console.log(data);   console.log(data.email);   $scope.people.push(data);  });
          });
           $scope.closepeoplemodal1();
      };


        /* ----------DISTANCE BETWEEN 2 SETS OF COORDINATES -------------- */
        $scope.distanceCalc2 = function() {
        //  var newPoint33 = distance($scope.storelatitude, $scope.storelongitude,
        //    $rootScope.latitude22, $rootScope.longitude22, 'K');
        //  console.log(newPoint33);
          //  $scope.finalCalc = newPoint33;

        };


        /* ----------DISTANCE FORMULA -------------- */

        function distance(lat1, lon1, lat2, lon2, unit) {
                var radlat1 = Math.PI * lat1/180;
                var radlat2 = Math.PI * lat2/180;
                var radlon1 = Math.PI * lon1/180;
                var radlon2 = Math.PI * lon2/180;
                var theta = lon1-lon2;
                var radtheta = Math.PI * theta/180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                dist = Math.acos(dist);
                dist = dist * 180/Math.PI;
                dist = dist * 60 * 1.1515;
                if (unit==="K") { dist = dist * 1.609344; }
                if (unit==="N") { dist = dist * 0.8684; }
                return dist;
        }


             /* ----------GET PICTURE FOR EACH PERSON --------------
        setTimeout(function() {    AuthService.confirm();
          var bob2 = "http://graph.facebook.com/" +$scope.userid+ "/picture?type=square";
          console.log("This is the data that I am goign to pass: "+ bob2);
          console.log($scope.userid);  $scope.black2 = bob2;
        }, 1000);
*/


           if ($scope.showfinalCalc === true) {   $scope.finalCalc =$rootScope.finalCalc ; }


          /* ----------ADDPEOPLE FUNCTION 2 -------------- */

         $scope.addPeopletoDB = function(){
            console.log("finalCalc: "+ $scope.finalCalc);
            socket.emit('addperson11', {store : $scope.grabStorename, line: $scope.grabLineNumber,
                   email: $scope.useremail, fullname: $scope.fullName,  longitude: $scope.longitude,
                   latitude: $scope.latitude, distance: $scope.finalCalc,  notificationkey: $rootScope.usertoken,
                   Adminpassword: $scope.usertoken },function (data) {

          $scope.failedData = data;
                $scope.failedLog = true;
                      $timeout(function () {
                                $scope.failedLog = false;
                            }, 3000);

               });
                $scope.closepeoplemodal1();
           };


         socket.on('updatePeople', function (data) {
               console.log($scope.grabStorename);  console.log(data.store);
             if ($scope.grabStorename === data.store && $scope.grabLineNumber === data.line) {
               $scope.$apply(function () { console.log(data); $scope.people.push(data); });
                $scope.successful = true;
               $timeout(function () { $scope.successful = false;  }, 3000);
             }
         });


         $scope.removeName = function(name) { var i = $scope.names.indexOf(name); $scope.names.splice(i, 1);  };


         //optimaze fcn
         $scope.optimizeStart2 = function(){
             for (i = 0; i < $scope.people.length; i++) {
                  if ($scope.people[i].email == 'jlatouf3@mgmail.com') {
                    $scope.people[i].distance = '0.888';
                  }
             }
         };

                //THIS WORKS:
         $scope.optimizeStart = function(){
              setInterval(function(){
              $cordovaGeolocation.getCurrentPosition()
              .then(function (position) {
                 var lat55  = position.coords.latitude;  var long55 = position.coords.longitude;
                 $scope.latitude33 = lat55;        $scope.longitude33 = long55;
              $rootScope.latitude55 = lat55;        $rootScope.longitude55 = long55;
              console.log(lat55 + '   ' + long55);
               $scope.findDistance();

              //ADDS DATA TO BACKEND:
              socket.emit('optimizeData', {store : $scope.grabStorename, line: $scope.grabLineNumber,
                     email: 'jlatouf2@gmail.com', distance: $scope.finalCalc },function (data) {
                       console.log(data);
                       for (i = 0; i < $scope.people.length; i++) {
                            if ($scope.people[i].email == 'jlatouf2@gmail.com') {
                              $scope.people[i].distance =  $scope.finalCalc;
                            }
                       }
                  $scope.$apply(function () {  /* console.log(data.email); $scope.people.push(data); */ });
                 });
              }, function(err) {  console.log(err);  });
            }, 5000);
          };


           socket.on('optimizeReturned', function (data) {
                 console.log(data);
               if ($scope.grabStorename == data[0].store && $scope.grabLineNumber == data[0].line) {
                 console.log(data);

                 for (i = 0; i < $scope.people.length; i++) {
                      if ($scope.people[i].email == data[0].email) {
                          //$scope.people[i] = data;
                          $scope.people[i].distance = data[0].distance;
                      }
                 }
               }
           });


         /* ----------DELETE MODE -------------- */

        $scope.deleteMode = function(){  $rootScope.deleteButton = true; $scope.closepeoplemodal1();  };

         $scope.exitDeleteMode = function(){ $rootScope.deleteButton = false; };

          /* ----------OPTIONS MODAL -------------- */
         $scope.optionsModa22 = function(){ $("#optionsModa22").modal("show"); }

           /* ----------ADDYOURSELF MODAL -------------- */
           $scope.AddYourselfModal= function(){ $("#AddYourselfModal").modal("show"); }

           /* ----------POSITION BUTTON! -------------- */
           $scope.positionButton = function(){ $rootScope.numberLinesZero2 = false; };

           /* ----------DISPLACEMENT BUTTON! -------------- */
           $scope.displacementButton = function(){ $rootScope.numberLinesZero2 = true; };

            /* ----------DELETE PEOPLE FUNCITON -------------- */
            $scope.deletePeople2 = function(email) { console.log("Email: " + email);
                socket.emit('deletePeopleLine55', {email : email, store : $scope.grabStorename, line: $scope.grabLineNumber },function (data) {
                 $scope.$apply(function () { console.log(data);   $scope.people = data; });
              });
            };


            socket.on('deletePeople55', function (data) {
                console.log(data);  console.log($scope.grabStorename);
                if (data == '') {
                  console.log('the data was deleted!');   $scope.$apply(function () { $scope.people = data; });
                } else if ($scope.grabStorename == data[0].store && $scope.grabLineNumber == data[0].line) {
                  $scope.$apply(function () { $scope.people = data;  });
                }
            });

          //Grabs Storename to pass to next page
          $scope.checkPeopleFcn = function(names){
                 socket.emit('checkPeopleAdmin', {store : $scope.grabStorename,
               line: $scope.grabLineNumber, Adminpassword: $scope.usertoken },function (data) {
                 $scope.$apply(function () { console.log(data);  $scope.countries = data;  });
                });
          };

    })

.controller('MessagingCtrl', function($scope, $location, $http, $rootScope ) {

//https://thawing-ocean-11742.herokuapp.com/findUserTokens
      $scope.$on('$stateChangeSuccess', function () {
           socket.emit('findUserTokens', {},function (data) {
            $scope.$apply(function () {
              console.log('worked');  console.log(data);
              $scope.usercontents = data;
             });
         });
       });

        $scope.message ={body:"Your turn is up!"};

        $scope.addStore1 = function(name){
           if ( $scope.message.body ==='') {
             console.log('Please enter a name');
               } else{
                 localStorage.setItem("messageBody", $scope.message.body);
                 console.log("MESSAGE ADDED!:"+ localStorage.getItem("messageBody"));
            }
        };


      $scope.messageAll = function(){
        if (window.confirm("Are you sure you would like to send this notification: " +
          localStorage.getItem("messageBody") + " to All Users?") === true) {

        socket.emit('findUserTokens', {},function (data) {
           $scope.$apply(function () {
             console.log('worked');  console.log(data);
             $rootScope.messageAlldata = data;
             $scope.usercontents = data;

              //loops through json array data to get notification keys:
               for(var i = 0; i < data.length; i++) {
                 var obj = data[i];
             //  console.log(obj.notificationkey);

                 if (obj.notificationkey !== undefined || null) {
                       $rootScope.noteSaveddata = obj.notificationkey;
                       console.log($scope.noteSaveddata);


                       $rootScope.noteArrray = obj.notificationkey;
                       $rootScope.noteName = obj.email;

                             $http({
                             url : "https://fcm.googleapis.com/fcm/send",
                             method : 'POST',
                             headers : { 'Content-Type' : 'application/json',
                             'Authorization': "key=AAAA0elGK7c:APA91bGMOeIMiLGKsu5EV6zvxdgJgiPJg6a-TBIVy3Uh1ihpAtAxm9EXFPIdVUyJmGRGCc8aD8bbS0R2Y4fGWw7kjwyoZiUmnFrqL83wd3KB0wqnMQRDZwVsrkeHUC4JGJ8RPhUpAelZ"   },
                             data: ({"to": $rootScope.noteArrray, "notification": {"title":"Lineups","body":localStorage.getItem("messageBody"), "sound":"default" },
                           "data":{ "message":"value33"}})
                                     //"Your Turn is up"
                             }).success(function(data){
                                 console.log("Successfully Passed Notification"); console.log(data);
                             }).error(function(error){
                                 console.log("That user does not have a notifivation key:"); console.log(error);
                             });
                       }
                  }
              });
              console.log($rootScope.noteArrray);
          });
        } else {  console.log( "You pressed Cancel!");   }

      };


        $scope.grabStuff = function(notificationkey, email){
              console.log( notificationkey);   console.log( email);
                var not = notificationkey; console.log(not);
              if (window.confirm("Are you sure you would like to send a notification to !") === true) {
                  console.log( "You pressed OK!");
                    $http({
                    url : "https://fcm.googleapis.com/fcm/send",
                    method : 'POST',
                    headers : { 'Content-Type' : 'application/json',
                    'Authorization': "key=AAAA0elGK7c:APA91bGMOeIMiLGKsu5EV6zvxdgJgiPJg6a-TBIVy3Uh1ihpAtAxm9EXFPIdVUyJmGRGCc8aD8bbS0R2Y4fGWw7kjwyoZiUmnFrqL83wd3KB0wqnMQRDZwVsrkeHUC4JGJ8RPhUpAelZ"   },
                    data: ({"to": not, "notification": {"title":"Lineups","body":localStorage.getItem("messageBody"), "sound":"default"},
                    "data":{ "message":"value44"}})
                            //"Your Turn is up"
                    }).success(function(data){
                        alert("Successfully Passed Notification"); console.log(data);
                    }).error(function(error){
                        alert("That user does not have a notifivation key:"); console.log(error);
                    });
              } else {  console.log( "You pressed Cancel!");   }
         };

     })

.controller('AnalyticsCtrl', function($scope, $location, $http, $rootScope ) {


            socket.emit('findUserTokensPeopleLine', {},function (data) {
             $scope.$apply(function () {
               console.log('worked'); console.log(data);
               $scope.usercontents = data;  $rootScope.numberLinesAnalytics = true;

              });
          });

            /* ----------POSITION BUTTON! -------------- */
            $scope.positionButton = function(){
                 socket.emit('findUserTokensPeopleLine', {},function (data) {
                  $scope.$apply(function () {
                    console.log('worked'); console.log(data);
                    $scope.usercontents = data;  $rootScope.numberLinesAnalytics = true;
                   });
               });
             };

            /* ----------DISPLACEMENT BUTTON! -------------- */
            $scope.displacementButton = function(){
                  socket.emit('findUserTokens', {},function (data) {
                  $scope.$apply(function () {
                    console.log('worked'); console.log(data);
                    $scope.usercontents = data;  $rootScope.numberLinesAnalytics = false;
                   });
               });
            };

      })

 .controller('LoginCtrl', function($scope, $location, $http, $rootScope, $timeout, AuthService ) {

  /* document.addEventListener("deviceready", function() {
     window.FirebasePlugin.grantPermission();
               }, false);
*/

              $scope.noteToken = localStorage.getItem("TokenData");
             $scope.email = {email1 : "jlatouf2@gmail.com333"};
             $scope.password = {password1 : "jarredl"};

             document.addEventListener("deviceready", function() {
              // window.FirebasePlugin.onTokenRefresh(function(token) {
                 window.FirebasePlugin.getToken(function(token) {

               // save this server-side and use it to push notifications to this device
               // save this server-side and use it to push notifications to this device
            //   window.alert(token);
              localStorage.setItem("TokenData", token);
              var myToken = localStorage.getItem("TokenData");
              $rootScope.noteToken = myToken;
          //    window.alert(myToken);

            }, function(error) {
               window.alert(error);
           });
                         }, false);


                 /*   --------LOGIN FUNCTION-----------     */
            $scope.ServiceFunction5 = function () {
              document.addEventListener("deviceready", function() {
                window.FirebasePlugin.getToken(function(token) {
                // save this server-side and use it to push notifications to this device
                // save this server-side and use it to push notifications to this device
            //    window.alert(token);
               localStorage.setItem("TokenData", token);
               var myToken = localStorage.getItem("TokenData");
               $rootScope.noteToken = myToken;
            //   window.alert(myToken);

              //  window.alert(token);
            }, function(error) {
                window.alert(error);
            });
                          }, false);
                          AuthService.LoginExample3($scope.email.email1, $scope.password.password1, $rootScope.noteToken);
            };
                     //FACEBOOK SERVICE.JS LOGIN:
            $scope.Servicefacebook = function () {
              document.addEventListener("deviceready", function() {
                      window.FirebasePlugin.getToken(function(token) {
                      // save this server-side and use it to push notifications to this device
                       window.alert(token);
                     localStorage.setItem("TokenData", token);
                     var myToken = localStorage.getItem("TokenData");
                     $rootScope.noteToken = myToken;
                     window.alert(myToken);

                      window.alert(token);
                  }, function(error) {
                      window.alert(error);
                  });
                }, false);

              AuthService.facebookLogin( $rootScope.noteToken);
            };

      })


 .controller('DetailsCtrl', function($scope, $location, $http ) {

          console.log($scope.detailEmail); console.log($scope.detailStore);
          console.log($scope.detailLine);  console.log($scope.detailNotification);

           //THIS IS MESSAGE TEXTAREA
           $scope.message ={body:"Your turn is up!"};

           $scope.addStore1 = function(){
              if ( $scope.message.body === '') {
                console.log('Please enter a name');
                  } else{
                    localStorage.setItem("messageBody", $scope.message.body);
                    console.log("MESSAGE ADDED!:"+ localStorage.getItem("messageBody"));
               }
           };

           //THIS IS MESSAGE BUTTON:
         $scope.sendMessage = function(){
                 var not = $scope.detailNotification; console.log(not);
               if (window.confirm("Are you sure you would like to send a notification to !") === true) {
                   console.log( "You pressed OK!");
                     $http({
                     url : "https://fcm.googleapis.com/fcm/send",
                     method : 'POST',
                     headers : { 'Content-Type' : 'application/json',
                     'Authorization': "key=AAAA0elGK7c:APA91bGMOeIMiLGKsu5EV6zvxdgJgiPJg6a-TBIVy3Uh1ihpAtAxm9EXFPIdVUyJmGRGCc8aD8bbS0R2Y4fGWw7kjwyoZiUmnFrqL83wd3KB0wqnMQRDZwVsrkeHUC4JGJ8RPhUpAelZ"   },
                     data: ({"to": not, "notification": {"title":"Lineups","body":localStorage.getItem("messageBody"), "sound":"default", "click_action":"FCM_PLUGIN_ACTIVITY"},
                    "data":{ "message":"value1"}})
                             //"Your Turn is up"
                     }).success(function(data){
                         alert("Successfully Passed Notification");  console.log(data);
                     }).error(function(error){
                         alert("That user does not have a notifivation key:"); console.log(error);
                     });
               } else {
                   console.log( "You pressed Cancel!");

               }
          };

    })

.controller('ForgotCtrl', function($scope, $location, $timeout, $rootScope, $http ) {

        $scope.forgotPassword = function(email) {
              console.log("email: "+ email);
              if ( email === undefined) {
                console.log('Please enter an email');
                  } else{
                $http.post('http://192.168.1.115:3000/forgotEmail', { email: email })
                    .success(function( data) {
                    console.log (data);
                    $rootScope.successMessage = true;
                    $timeout(function(){ $rootScope.successMessage = false;   },3000);
                    $timeout(function(){ $location.path('/reset');   },3000);

                    })
                    .error(function (data) {
                      console.log(data);   console.log(data.msg);
                      $rootScope.failedData = data.msg;
                      $rootScope.failedMessage = true;
                  $timeout(function(){  $rootScope.failedMessage = false; },5000);
                     });
              }
           };
    })

.controller('ResetCtrl', function($scope, $location, $http, $rootScope, $timeout ) {

          $scope.resetForgottenPassword = function(password, passwordRepeat, resetToken) {
              console.log("password: "+ password);
              console.log("passwordRepeat: "+ passwordRepeat);

               if (password === passwordRepeat) {
                 $http.post('http://192.168.1.115:3000/resetPassword', { password: password, resetToken: resetToken} )
                     .success(function( data) {
                     console.log (data);
                    // $timeout(function(){ $rootScope.successMessage = true;   },5000);
                    $rootScope.successMessage2 = true;
                    $rootScope.successnote = data.message;
                    $timeout(function(){ $rootScope.successMessage2 = false;   },3000);
                     })
                     .error(function (data) {
                       console.log(data);
                       $rootScope.failedData2 = data.message; $rootScope.failedMessage2 = true;
                   $timeout(function(){  $rootScope.failedMessage2 = false; },5000);
                       });
               }
         };

   });

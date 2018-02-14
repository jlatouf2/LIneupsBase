Ionic App Base
==============
  TO DELETE PEOEPLE FROM PERSON LINE:
NOTE:     1) CHECK IF YOUR StoreAdmin
          2) CHECK IF YOUR LineAdmin
          3) Check your email with email of person you select....



A starting project for Ionic that optionally supports using custom SCSS.

1) generates apk file:
   ionic cordova build --release android
2)keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
   -generates keystore file
3)remane keystore to: HelloWorld-release-unsigned.apk
4)  jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
    -signs keystore.
5) /Users/jarredlatouf/zipalign-master/zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk


-       To update the app for future releases:

******  REMEMBER TO CHANGE THE VERSIONCODE TO A HIGHER NUMBER, MAY NEED HIGHER THAN 3******
1)ionic cordova build android --release -- -- --versionCode=16
[change name to HelloWorld]

2)Sign your release build with the key from your keystore. In below example the keystore is in the root of your project, but of course it's also possible to define another path:

 jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name

 3)Zipalign your signed APK:

/Users/jarredlatouf/zipalign-master/zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk


then go to:
https://play.google.com/apps/testing/com.tested.myapp2439485068
This is the alpha code so that someone can download the application.

/Users/jarredlatouf/Library/Android/sdk/build-tools/22.0.1/zipalign


heroku create example
Creating ⬢ example... done
https://example.herokuapp.com/ | https://git.heroku.com/example.git



-       To BUILD APP FOR IOS:
1) GO TO XCODE AND SIGN PROVISIONING PROFILE [TO GET BUNDLE ID]

2) GO TO ITUNES CONNECT AND SELECT APP  
  -MUST HAVE CORRECT BUNDLE ID[ THIS IS GENERATED FOR YOU IN XCODE WHEN YOU
  AUTOMATICALLY SIGN PROVISIONING PROFILE]

3)GO TO XCODE AND GO TO PROJECT / AND ARCHIVE

4)WHEN FINISHED UPLOADING MAY TAKE A FEW MINUTES TO BE DONE ON ITUNES CONNECT,
  YOU WILL GET EMAIL WHEN FINISHED


      TO UPGRADE APP TO NEW VERSION:

1) GO TO XCODE AND CHANGE VERSION AND BUILD NUMBERS  

2) SELECT PROJECT AND ARCHIVE

3) WHEN FINISHED UPLOADING MAY TAKE A FEW MINUTES TO BE DONE ON ITUNES CONNECT,
    YOU WILL GET EMAIL WHEN FINISHED



-TO MAKE IOS BUILDS:
1) ionic cordova build IOS
2)1) ionic cordova run IOS
3) if signing error: click on xcode.project file and it go to xcode to add it then it will work



-TO MAKE NOTIFICATION PUSHES RUN:
https://medium.com/@t1tan1um/fcm-integration-for-cordova-hybrid-apps-c679f5fc1988
cordova create pushSample
cd pushSample
cordova platform add android
- cordova plugin add cordova-plugin-fcm

-make sure has right plist file
-make sure copy plist file into other plist file:-TURN ON NOTIFICATIONS WITH XCODE platforms/ios/myprojectname/resorces/resorces/plist
-TURN ON NOTIFICATIONS WITH XCODE

****ALSO FOR THIS MASTER TO WORK YOU PROB HAVE TO GO OVER THE MEDIUM STEPS AGAIN,
ADD THE API KEYS TO THE DIFFERENT PROJECT, AND THEN REPLACE THE PLIST FILE IN IOS.****


APP ID PREFIX: LJ4JD54F4Q

Name:  IosAuthKey
Key ID: AVPRLXTSK8
Services APN


FOLLOW THE MEDIUM PROJECT AND REBUILD THE APP TO WORK AGAIN:
[ALSO MAY HAVE TO ADD PHONEGAP PUSH PLUGIN WITH THE FIREBASE SENDER ID,
IT DOES NOT SAY TO DO THIS BUT YOU MAY HAVE TO DO IT ANYWAY.]

ionic plugin add phonegap-plugin-push --variable SENDER_ID="739224829678"
-TO PUT ON IOS APP STORE:
1) MAKE APP WORK ON TEST PHONE
2) GO TO CODE AND CLICK ON PRODUCT, ARCHIVE THEN UPLOAD TO APP STORE.

-TO UPDATE VERSION:
-JUST GO TO NEW VERSION IN XCODE AND USE ARCHIVE AGAIN, THEN SELECT IT IN BUILD ON ITUNES CONNECT


    TO MAKE IOS NOTIFICATIONS WORK:
    [make sure to follow the medium website instructions to build another one.]
1) ADD IONIC PROJECT [make sure bundle id is equal to id in config.xml for both ios and android]
2) REPLACE WWW WITH PROJECT WWW
3) ADD PROJECT TO FIREBASE, THEN DOWNLOAD PLIST FILE, THEN ADD CORDOVA-PLUGIN-FCM
4) GO TO XCODE TO MAKE SURE PROJECT IS SIGNED [PROVISIONAL FILES ARE GENERATED FOR You
   , ALSO MAKE SURE TO TURN ON PUSH NOTIFICATIONS]
   [THIS WILL ALSO GENERATE APP ID IN APPLE DEVELOPER ADD ID SECTION]
5) ADD App ID Prefix FROM TEAM ID FROM APPLE DEVELOPER,
6) ADD AUTH Key [TRY TO BUILD IOS, AND IT SHOULD WORK, THEN UPDATE PLIST FILE That
WILL NOT AUTO GENERATE IN PLATFORMS/IOS/MYAPP/RESOURSES/RESEARSES]
7) SEND PUSH WITH FIREBASE CONSOLE.....


ionic cordova plugin add --save cordova-plugin-facebook4 --variable APP_ID="my_app_id" --variable APP_NAME="my_app_name" --variable CHANNEL_NAME="master"

    TO MAKE THE FACEBOOK LOGIN RUN:
1) cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID="2042335766002685" --variable APP_NAME="Androidexample02"
2) create ionic project
3) add Android
4) facebookConnectPlugin.login(["email" ], first THEN:
5) facebookConnectPlugin.api('me/?fields=id,name,email', ['email','public_profile'],





var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 7000 });

var watch;
var watchOptions = {
  timeout : 5000,
  maximumAge: 3000,
  enableHighAccuracy: true // may cause errors if true
};


var watchCurrentLocation = function() {
  watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
      console.log("watch error", err);
    },
    function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude

      console.log('lat long', lat, long);
      $scope.lastLocation.lat = $scope.currentLocation.lat;
      $scope.lastLocation.long = $scope.currentLocation.long;

      $scope.currentLocation.lat = lat;
      $scope.currentLocation.long = long;
  });
};



  1)CHANGE THE APP.JS  to actual email address:
       to: req.body.email,  to this:    to: 'jlatouf2@gmail.com',


-REMOVE PHONEGAP-PLUGIN-PUSH
-ionic cordova plugin remove phonegap-plugin-push

to change App Name:
1) delete all three PLATFORMS
2) add platforms back
3) remove phonegap plugin-push
4) update googleservice-info.plist in ios for it to work.


//$state.go('home')
//  $location.path('/home');
//  window.location.href = "#/home";
//  window.location.replace("#/home");


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


      DATA SORT

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

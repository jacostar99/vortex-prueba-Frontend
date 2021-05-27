// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl : 'http://localhost:9090',

  
  firebaseConfig : {
    apiKey: "AIzaSyA7iaz1q7gvWBpUIs-mLqrlM7cdqmHoRDU",
    authDomain: "vortex-test-70fee.firebaseapp.com",
    projectId: "vortex-test-70fee",
    storageBucket: "vortex-test-70fee.appspot.com",
    messagingSenderId: "1071891094863",
    appId: "1:1071891094863:web:245a99d7ebcbf3c038f93a"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCUq4gO-BC2hu4W6-zWqkezp5s4aYYLE5Y',
    authDomain: 'caixasapp.firebaseapp.com',
    databaseURL: 'https://caixasapp.firebaseio.com',
    projectId: 'caixasapp',
    storageBucket: 'caixasapp.appspot.com',
    messagingSenderId: '1033135223887'
  }
};

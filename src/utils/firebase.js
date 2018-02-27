import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCcXmE1XLx-UMwGljEPzh8CAW9BuzY2IJA",
  authDomain: "example-c60ad.firebaseapp.com",
  databaseURL: "https://example-c60ad.firebaseio.com",
  projectId: "example-c60ad",
  storageBucket: "example-c60ad.appspot.com",
  messagingSenderId: "997909509554"
};
var fire = firebase.initializeApp(config);
export default fire;

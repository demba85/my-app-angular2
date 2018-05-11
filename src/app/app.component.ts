import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 constructor() {
   var config = {
     apiKey: "AIzaSyCCv7phJ-qk7h5b0nRwDVfYjW0TlCgjjJo",
     authDomain: "http-client-demo-149c2.firebaseapp.com",
     databaseURL: "https://http-client-demo-149c2.firebaseio.com",
     projectId: "http-client-demo-149c2",
     storageBucket: "http-client-demo-149c2.appspot.com",
     messagingSenderId: "831719900145"
   };
   firebase.initializeApp(config);
 }
}

import React from 'react';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3hRiP-aGELT8PnLEprqZP5vjrMckTcJA",
  authDomain: "galapago-scu.firebaseapp.com",
  databaseURL: "https://galapago-scu.firebaseio.com",
  projectId: "galapago-scu",
  storageBucket: "galapago-scu.appspot.com",
  messagingSenderId: "939206919986"

};
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();


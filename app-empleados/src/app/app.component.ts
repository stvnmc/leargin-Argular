import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCs13YXySyP2W1YStiCCVDnj-Gxu0vnZ0E',
      authDomain: 'mis-clientes-84473.firebaseapp.com', // Agrega el protocolo y el dominio completo
    });
  }
}

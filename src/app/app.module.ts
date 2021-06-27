import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
const firebaseConfig = {
  apiKey: "AIzaSyAA3B368gX1KU2gfssqICDKMCOmkSAgqHE",
  authDomain: "test9-de1da.firebaseapp.com",
  projectId: "test9-de1da",
  storageBucket: "test9-de1da.appspot.com",
  messagingSenderId: "896492224628",
  appId: "1:896492224628:web:52712b55203e1054965121"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
     AngularFireModule.initializeApp(firebaseConfig), 
     AngularFireAuthModule,AngularFirestoreModule, AngularFireStorageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

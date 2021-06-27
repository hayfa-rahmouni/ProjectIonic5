import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private fire: AngularFireAuth,public toastController: ToastController) {}
  connect(){

    this.router.navigateByUrl("/menu")
  }
  gotologin(){
    this.router.navigateByUrl("/home")
  }
  logout(){
    this.router.navigateByUrl("/welcome");
  }
}

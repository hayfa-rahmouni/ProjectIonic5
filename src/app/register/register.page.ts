import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {  NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email:string;
  password:string;
  name:string;
  familyname:string;
  tel:number;
  constructor(private fire:AngularFireAuth, private router:Router , private alertController:AlertController , private db:AngularFirestore) {}
  ngOnInit() {
    
  }
  connect(){
 this.fire.auth.createUserWithEmailAndPassword(this.email,this.password)
        .then(
             data =>{
                  this.db.collection("user").doc(data.user.uid).set({Email:this.email,Name:this.name,password:this.password,familyname:this.familyname,tel:this.tel})
                  .then(data=>{
                    console.log("user added")
                    this.router.navigateByUrl("/home")

                  })
                  .catch(err=>{}
                  )
     }
        ) 
        .catch(
          err=>{ this.MonAlert();
 
          }
 
        )
 
 
 }
 async MonAlert() {
   const alert = await this.alertController.create({
     
     header: 'Alert',
     subHeader: 'Subtitle',
     message: 'Verifier vos parametres.',
     buttons: ['Cancel', 'OK']
   });
 
   await alert.present();
 
}


}
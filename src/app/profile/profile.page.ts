import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
obj: any;
name:any;
email:any;
tel:any;
liste:any =[];
  constructor(private db: AngularFirestore, private storage :AngularFireStorage
     ,private router:Router,private auth:AuthService) {
    this.email=this.auth.Email;
    this.name=this.auth.name;
    this.tel=this.auth.tel;
   }

  ngOnInit() {
    this.email=this.auth.Email;
    this.name=this.auth.name;
    console.log('hey '+this.email)
  }
  gotoaddpage(){

    this.router.navigateByUrl("/additem")
  }
  getitem(){

    this.db.collection("house").snapshotChanges()
      .subscribe
      (data => {
        this.liste=data.map(
          e=> {
           
            return {
              id: e.payload.doc.id,
              Description: e.payload.doc.data()['Description'],
              prix: e.payload.doc.data()['prix'],
              address: e.payload.doc.data()['address'],
              image:this.storage.ref(e.payload.doc.data()['image']).getDownloadURL(),
             name: e.payload.doc.data()['name'],
               iduser: e.payload.doc.data()['iduser'],
               tel: e.payload.doc.data()['tel']

            }
          }
        )
      })
  }
  deleteitem(item){
    this.db.doc("house/"+item.id).delete();
    this.getitem();
  }

  }




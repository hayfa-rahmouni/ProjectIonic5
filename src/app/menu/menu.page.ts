import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  liste: any = [];
  liste1: any ;
  constructor(private db: AngularFirestore, private storage :AngularFireStorage ,private router:Router) {
    this.gethouse();
   //this.getuser();
   console.log(this.liste.iduser);
   
  }

  ngOnInit() {
   

  }
  gethouse() {
    this.db.collection("house").snapshotChanges()
      .subscribe
      (data => {
        this.liste=data.map(
          e=> {
            console.log({
              id: e.payload.doc.id,
              Description: e.payload.doc.data()['Description'],
              prix: e.payload.doc.data()['prix'],
              address: e.payload.doc.data()['address'],
              image:this.storage.ref(e.payload.doc.data()['image']).getDownloadURL(),
              name:e.payload.doc.data()['name'],
              iduser: e.payload.doc.data()['iduser']


            });
            
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
  /*getuser(){
    this.db.collection("user",ref=>ref.where("id","==","VqbYfiV0SKc5m30PcNLEsVsAM9h2")).snapshotChanges()
      .subscribe
      (data => {
        this.liste1 = data.map(
          e=> {
            return {
              id: e.payload.doc.id,
              Name: e.payload.doc.data()['Name'],
              Email: e.payload.doc.data()['Email'],
              tel: e.payload.doc.data()['Cell number']
        
              

            }
          }
        )
      })

  }*/

  deleteitem(item){
    this.db.doc("house/"+item.id).delete();
    this.gethouse();
  }

  gotologin(){
    this.router.navigateByUrl("/home")
  }
  addLike(post) {
    this.db.doc("house/" + post.id ).set({
       liked: true
    });
 }
}


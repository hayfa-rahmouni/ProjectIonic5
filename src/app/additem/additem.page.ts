import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
}) 
export class AdditemPage implements OnInit {

  @ViewChild("id_f") file_id: any;

  Description: string;
  prix: number;
  address: string;
  user : any;
  name:any;
  email:any;
  tel:any;
  
  constructor(private storage: AngularFireStorage, private router: Router, private db: AngularFirestore,
    private auth: AuthService) {
      this.user=this.auth.user;
      this.name=this.auth.name;
      this.tel=this.auth.tel;



   /* this.user=JSON.parse(localStorage.getItem('user'))
    console.log(this.user);*/

    
   }

  ngOnInit() {
  }
  add() {


    const files = this.file_id.nativeElement.files[0]; /*recupérer le 1erelement existant dans le file id*/
    const filePath=`${Date.now()}_${files.name}`;
    this.storage.upload(filePath, files);
    this.db.collection("house").add({
       Description: this.Description, prix: this.prix, address: this.address, image: filePath,
      tel:this.auth.tel,name:this.auth.name })

    console.log("item added")
    this.router.navigateByUrl("/menu")

  }
}
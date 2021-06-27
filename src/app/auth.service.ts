import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  Email:any;
  name:any;
  tel:any;
  constructor(private fire:AngularFireAuth, private router:Router ,
     private alertController:AlertController , private db:AngularFirestore) { }

  connect(email:string,password:string){

      this.fire.auth.signInWithEmailAndPassword(email,password).then(cred=>{
        console.log('hello cred'+cred.user.uid);
        this.user=cred.user.uid;
         this.db.collection("user").doc(cred.user.uid).get().subscribe((doc) => {
    if (doc.exists) {
      this.Email=doc.data()["Email"];
      this.name=doc.data()["Name"];
      this.tel=doc.data()["tel"];

        console.log("Document data:", doc.data()["Email"],doc.data()["Name"]);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
         });
         this.router.navigateByUrl('/profile');
        
     /*  this.db.collection('user').snapshotChanges().subscribe(data=>{
          data.map(
            e=>{
             
              
             if(this.fire.auth.currentUser.email==e.payload.doc.data()['Email']){
                    localStorage.setItem('user',JSON.stringify({
                    id:e.payload.doc.id,
                    Name: e.payload.doc.data()['Name'],
                    Email: e.payload.doc.data()['Email'],
                    tel: e.payload.doc.data()['tel']
                    
                  }));
                  this.router.navigateByUrl('/profile');
              }
              
              return{
                id:e.payload.doc.id,
                
              }
              
            
          
          }
          );
        });*/
        
      }).catch(err=>{
        console.log(err);
      }
      )
    }
  
}

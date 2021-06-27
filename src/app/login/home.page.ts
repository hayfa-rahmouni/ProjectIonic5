import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:string;
  password:string;
  userid:any;
  constructor(private fire:AngularFireAuth, private router:Router , private alertController:AlertController , private fireStore:AngularFirestore ,
    private auth:AuthService ) {
      this.userid=this.auth.user;
    }
 connect(){
   this.auth.connect(this.email,this.password);
 /* if(localStorage.getItem('user')==null){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password).then(()=>{
      this.fireStore.collection('user').snapshotChanges().subscribe(data=>{
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
      });
      
    }).catch(err=>{
       this.MonAlert();
    }
    )
  }
  else{
    this.router.navigateByUrl('/profile');
  }*/
}
   /*
this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
       .then(
            data =>{
                 this.router.navigateByUrl("/profile");
    }
       ) 
       .catch(
         err=>{ this.MonAlert();

         }

       )
       this.fireStore.collection('Users').snapshotChanges().subscribe(data=>{
        data.map(
          e=>{
            console.log(e.payload.doc.data()['imageUrl']);
            
           if(this.fireAuth.auth.currentUser.email==e.payload.doc.data()['email']){
                  localStorage.setItem('user',JSON.stringify({
                  id:e.payload.doc.id,
                  name:e.payload.doc.data()['name'],
                  age:e.payload.doc.data()['age'],
                  email:e.payload.doc.data()['email'],
                  password:e.payload.doc.data()['password'],
                  image:e.payload.doc.data()['imageUrl']
                }));
                this.router.navigateByUrl('/tab');
            }
            
            return{
              id:e.payload.doc.id,
              name:e.payload.doc.data()['name'],
              age:e.payload.doc.data()['age'],
              email:e.payload.doc.data()['email'],
              password:e.payload.doc.data()['password'],
              imageUrl:e.payload.doc.data()['imageUrl']
            }
            
          
        
        }
        );
      });
      
    })*/




async MonAlert() {
  const alert = await this.alertController.create({
    
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'Verifier vos parametres.',
    buttons: ['Cancel', 'OK']
  });

  await alert.present();
}



connect1(){
  this.router.navigateByUrl("/register");
}



}

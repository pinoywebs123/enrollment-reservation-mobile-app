import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReserveProvider } from '../../providers/reserve/reserve';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { AdminPage } from '../admin/admin';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  id: any;
  password: any;
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ReserveProv : ReserveProvider,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  clickLogin(){
    this.ReserveProv.loginUser(this.id, this.password).subscribe(data => {
      console.log(this.data = data);

      if(this.data.status == true){
        localStorage.setItem("token", this.data.token);
        if(this.data.user.role_id == 2){
          localStorage.setItem("role", this.data.user.role_id);
          this.navCtrl.setRoot(HomePage,this.data.token); 
          this.showStudent();
        }else if(this.data.user.role_id == 3){
          localStorage.setItem("token", "");
          localStorage.setItem("role", "");
          this.showAlert();
        }else{
          localStorage.setItem("token", "");
          localStorage.setItem("role", "");
          this.showAlert();
        }
        
      }else{
        this.showAlert();
      }
    });
    
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error!!',
      subTitle: 'You have enter invalid username and password',
      buttons: ['OK']
    });
    alert.present();
  }

  showAdmin() {
    let alert = this.alertCtrl.create({
      title: 'Success!!',
      subTitle: 'Welcome Staff',
      buttons: ['OK']
    });
    alert.present();
  }


  showStudent() {
    let alert = this.alertCtrl.create({
      title: 'Success!!',
      subTitle: 'Welcome Norsu Students',
      buttons: ['OK']
    });
    alert.present();
  }





}

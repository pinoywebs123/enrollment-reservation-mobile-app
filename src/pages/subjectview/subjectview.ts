import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReserveProvider } from '../../providers/reserve/reserve';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-subjectview',
  templateUrl: 'subjectview.html',
})
export class SubjectviewPage {
  sub: any;
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ReserveProv : ReserveProvider,public alertCtrl: AlertController) {
    this.sub = this.navParams.data;
  }

  ionViewDidEnter() {
    this.ReserveProv.viewSubject(this.sub).subscribe(data => {
      console.log(this.data = data);
    });
  }

  clickReserve(subject_id){
    this.showConfirm(subject_id);
  }
  showConfirm(subject_id) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure to reserve?',
      message: 'You are not allowed to reserve for fun. Kindly read the terms and agreement for NORSU University Code',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.pop();
            this.ReserveProv.reserveSubject(subject_id).subscribe(data => {
              console.log(this.data = data.message);
              if(data.message == "success"){
                
                this.successReserve();
              }else {
                this.existReserve();
              }
             
            }) 
          }
        }
      ]
    });
    confirm.present();
  }

  successReserve(){
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'You have successfully reserve!',
      buttons: ['OK']
    });
    alert.present();
  }

  existReserve(){
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'You have already reserve in this subject!',
      buttons: ['OK']
    });
    alert.present();
  }


}

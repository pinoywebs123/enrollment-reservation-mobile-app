import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReserveProvider } from '../../providers/reserve/reserve';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-createinquiry',
  templateUrl: 'createinquiry.html',
})
export class CreateinquiryPage {
  title: string;
  content: string;
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public reservProv : ReserveProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateinquiryPage');
  }

  clickSubmit(){
    
    this.reservProv.createInquiry(this.title, this.content).subscribe(data => {
      console.log(this.data = data.message);
      if(data.message == true){
        this.navCtrl.setRoot(HomePage);
        this.showAlert();
      }
      
    })

    
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Inquiry has been sent Successfully!!!',
      buttons: ['OK']
    });
    alert.present();
  }


}

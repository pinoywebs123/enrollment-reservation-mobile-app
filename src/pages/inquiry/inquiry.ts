import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReserveProvider } from '../../providers/reserve/reserve';
import { CreateinquiryPage } from '../createinquiry/createinquiry';
@IonicPage()
@Component({
  selector: 'page-inquiry',
  templateUrl: 'inquiry.html',
})
export class InquiryPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public reservProv : ReserveProvider) {
  }

  ionViewDidLoad() {
    this.reservProv.viewInquiry().subscribe(data => {
      console.log(this.data = data.message);
    }) 
  }

  clickCreateInquiry(){
    this.navCtrl.setRoot(CreateinquiryPage);
  }

}

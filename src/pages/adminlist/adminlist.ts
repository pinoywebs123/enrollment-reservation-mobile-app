import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReserveProvider } from '../../providers/reserve/reserve';

@IonicPage()
@Component({
  selector: 'page-adminlist',
  templateUrl: 'adminlist.html',
})
export class AdminlistPage {
  data: any;
  data2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public reserveProv:ReserveProvider) {
    this.data = this.navParams.data;
  }

  ionViewDidEnter(){
    this.reserveProv.viewStudent(this.data).subscribe(data2=> {
      console.log(this.data2 = data2.data);
    });
  }
  

}

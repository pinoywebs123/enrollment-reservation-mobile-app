import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReserveProvider } from '../../providers/reserve/reserve';

@IonicPage()
@Component({
  selector: 'page-studact',
  templateUrl: 'studact.html',
})
export class StudactPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public reservProv : ReserveProvider) {
  }

  ionViewDidLoad() {
    this.reservProv.viewActivity().subscribe(data => {
      console.log(this.data = data.message);
    }) 
  }

}

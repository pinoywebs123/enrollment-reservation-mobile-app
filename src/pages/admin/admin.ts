import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ReserveProvider } from '../../providers/reserve/reserve';
import { AdminactPage } from '../adminact/adminact';
import { AdminsetPage } from '../adminset/adminset';
import { AdminlistPage } from '../adminlist/adminlist';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ReserveProv : ReserveProvider) {
  }

  ionViewDidLoad() {
    this.ReserveProv.subjects().subscribe(data => {
      console.log(this.data = data);
    }) 
  }

  clickLogout(){
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
    this.navCtrl.setRoot(LoginPage);
  }

  clickAct(){
    this.navCtrl.push(AdminactPage);
  }

  clickSet(){
    this.navCtrl.push(AdminsetPage);
  }

  clickStudentList(id){
    this.navCtrl.push(AdminlistPage,id);
  }

}

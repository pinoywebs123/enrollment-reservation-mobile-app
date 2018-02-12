import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReserveProvider } from '../../providers/reserve/reserve';

import { LoginPage } from '../login/login';
import{ SubjectviewPage } from '../subjectview/subjectview';
import { StudactPage } from '../studact/studact';
import { StudsetPage } from '../studset/studset';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subject : any;
  data: any;
  token: any;
  constructor(public navCtrl: NavController, public ReserveProv : ReserveProvider, public navParams: NavParams) {
    this.subject = "n1";
    this.token = this.navParams.data;
  }

  ionViewDidEnter(){
    this.ReserveProv.subjects().subscribe(data => {
      console.log(this.data = data);
    }) 
  }

  clickLogout(){
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
    this.navCtrl.setRoot(LoginPage);
  }

  clickSubject(sub){
    this.navCtrl.push(SubjectviewPage, sub);
  }

  clickAct(){
    this.navCtrl.push(StudactPage);
  }

  clickSet(){
    this.navCtrl.push(StudsetPage);
  }
    

}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AdminPage } from '../pages/admin/admin';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
        this.rootPage = LoginPage;
      }else{
        if(localStorage.getItem("role") == "2"){
          this.rootPage = HomePage;
        }else if(localStorage.getItem("role") == "3"){
          this.rootPage = LoginPage;
        }
        
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


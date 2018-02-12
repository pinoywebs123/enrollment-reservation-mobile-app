import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AdminPage } from '../pages/admin/admin';
import{ SubjectviewPage } from '../pages/subjectview/subjectview';

import { ReserveProvider } from '../providers/reserve/reserve';

import { AdminactPage } from '../pages/adminact/adminact';
import { AdminsetPage } from '../pages/adminset/adminset';
import { AdminlistPage } from '../pages/adminlist/adminlist';

import { StudactPage } from '../pages/studact/studact';
import { StudsetPage } from '../pages/studset/studset';
@NgModule({
  declarations: [
    MyApp,
    HomePage
    // ,LoginPage,
    // AdminPage,
    // SubjectviewPage,
    // AdminactPage,
    // AdminsetPage,
    // StudactPage,
    // StudsetPage,
    // AdminlistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    ,LoginPage,
    AdminPage,
    SubjectviewPage,
    AdminactPage,
    AdminsetPage,
    StudactPage,
    StudsetPage,
    AdminlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReserveProvider
  ]
})
export class AppModule {}

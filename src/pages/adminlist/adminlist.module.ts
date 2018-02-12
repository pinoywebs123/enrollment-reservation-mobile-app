import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminlistPage } from './adminlist';

@NgModule({
  declarations: [
    AdminlistPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminlistPage),
  ],
})
export class AdminlistPageModule {}

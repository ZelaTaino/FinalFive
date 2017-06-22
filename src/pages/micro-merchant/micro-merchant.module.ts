import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MicroMerchantPage } from './micro-merchant';

@NgModule({
  declarations: [
    MicroMerchantPage,
  ],
  imports: [
    IonicPageModule.forChild(MicroMerchantPage),
  ],
  exports: [
    MicroMerchantPage
  ]
})
export class MicroMerchantPageModule {}

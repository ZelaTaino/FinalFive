import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MicroMerchantPage } from '../../pages/micro-merchant/micro-merchant';

/**
 * Generated class for the MerchantPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-merchant',
  templateUrl: 'merchant.html',
})
export class Merchant {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Merchant');
  }

  nextScreen() {
    this.navCtrl.setRoot(MicroMerchantPage);
  }

}

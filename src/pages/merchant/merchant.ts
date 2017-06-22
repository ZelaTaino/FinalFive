import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfileModalPage } from '../../pages/profile-modal/profile-modal';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openModal() {
  	let myModal = this.modalCtrl.create(ProfileModalPage);
  	myModal.present();
  }

    nextScreen() {
    this.navCtrl.setRoot(MicroMerchantPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Merchant');
  }

}

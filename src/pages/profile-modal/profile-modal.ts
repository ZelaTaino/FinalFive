import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Micromerchant } from '../../models/micromerchant';
import { ProfileTemplatePage } from '../../pages/profile-template/profile-template';

/**
 * Generated class for the ProfileModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-modal',
  templateUrl: 'profile-modal.html',
})
export class ProfileModalPage {

micromerchant = {} as Micromerchant;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  closeModal(){
  	this.viewCtrl.dismiss();
  }

  createProfile(micromerchant:Micromerchant){

   let data ={ name : micromerchant.name , city : micromerchant.city , industry : micromerchant.industry

   }
  	  this.navCtrl.setRoot(ProfileTemplatePage,data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileModalPage');
  }

}

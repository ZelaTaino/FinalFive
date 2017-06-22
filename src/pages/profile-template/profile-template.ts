import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileTemplatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-template',
  templateUrl: 'profile-template.html',
})
export class ProfileTemplatePage {

	public name: string;
	public ind: string;
	public city: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileTemplatePage');

      let Name = this.navParams.get('name');
      let Industry = this.navParams.get('industry');
      let City = this.navParams.get('city');
      this.name = Name;
      this.ind=Industry;
      this.city=City;
  }

}

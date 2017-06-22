import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';

import { ListPage } from '../../pages/list/list';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

user = {} as User;

  constructor(private afAuth: AngularFireAuth
   ,public navCtrl: NavController) {

  }

  async login(user:User)
  {
     try
     {
        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
        if(result)
        {
        this.navCtrl.push(ListPage);
    }}
    catch(e)
    {
      console.error(e);
    }

  }

}

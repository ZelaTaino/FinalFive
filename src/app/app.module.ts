import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Merchant } from '../pages/merchant/merchant';
import { ProfileModalPage } from '../pages/profile-modal/profile-modal';
import { MicroMerchantPage } from '../pages/micro-merchant/micro-merchant';
import { ProfileTemplatePage } from '../pages/profile-template/profile-template';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
   apiKey: "AIzaSyA4LZqk47ik_FDMsWzLhTogZwGJz54Jo44",
    authDomain: "microcard-5741e.firebaseapp.com",
    databaseURL: "https://microcard-5741e.firebaseio.com",
    projectId: "microcard-5741e",
    storageBucket: "",
    messagingSenderId: "567595948046"
    };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Dashboard,
    Merchant,
    ProfileModalPage,
    MicroMerchantPage,
    ProfileTemplatePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Dashboard,
    Merchant,
    ProfileModalPage,
    MicroMerchantPage,
    ProfileTemplatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

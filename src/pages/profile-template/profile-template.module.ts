import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileTemplatePage } from './profile-template';

@NgModule({
  declarations: [
    ProfileTemplatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileTemplatePage),
  ],
  exports: [
    ProfileTemplatePage
  ]
})
export class ProfileTemplatePageModule {}

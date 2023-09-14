import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContentPage } from './content.page';

import { ContentPageRoutingModule } from './content-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentPageRoutingModule
  ],
  declarations: [ContentPage]
})
export class ContentPageModule {}

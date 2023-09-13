import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DeletePage } from './delete.page';

import { DeletePageRoutingModule } from './delete-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletePageRoutingModule
  ],
  declarations: [DeletePage]
})
export class DeletePageModule {}

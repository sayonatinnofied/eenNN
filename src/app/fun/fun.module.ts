import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FunComponent } from './fun.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path:'',
        component:FunComponent
      }
    ])
  ],
  declarations: [FunComponent]
})
export class FunModule { }

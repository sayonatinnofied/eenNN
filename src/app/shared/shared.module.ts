import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [LogoutComponent, HeaderComponent],
  entryComponents:[LogoutComponent],
  exports: [LogoutComponent, HeaderComponent]
})
export class SharedModule { }

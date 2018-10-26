import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: String;
  private isNotHome: boolean;
  private popover: HTMLIonPopoverElement;
  constructor(public popoverController: PopoverController, public router: Router) {

  }

  async presentPopover(ev: any) {
    this.popover = await this.popoverController.create({
      component: LogoutComponent,
      componentProps: { title: this.title },
      event: ev,
      translucent: true
    });
    return await this.popover.present();
  }

  ngOnInit() {
    this.isNotHome = this.title !== 'Home';
  }

  navigateTo(path: String, data?: any) {
    if (data)
      this.router.navigate([path, JSON.stringify(data)]);
    else
      this.router.navigate([path]);
  }

}

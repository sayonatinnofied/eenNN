import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  @Input() title: String;
  private isNotProfile: boolean;
  constructor(public router: Router, public popoverController: PopoverController, private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.isNotProfile = this.title !== 'Profile';
  }

  logout() {
    this.authService.logout();
    this.navigateTo('/login');
  }

  navigateTo(path: String, data?: any) {
    this.popoverController.dismiss();
    if (data)
      this.router.navigate([path, JSON.stringify(data)]);
    else
      this.router.navigate([path]);
  }

}

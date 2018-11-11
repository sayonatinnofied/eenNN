import { Component, OnInit } from '@angular/core';
import { User } from '../shared/_model/user.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private title:String = "Profile";
  private user: User;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.user.avatar = "assets/img/avatar.png"
  }

}

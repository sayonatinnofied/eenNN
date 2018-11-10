import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../shared/_services/authentication.service';
import { User } from '../shared/_model/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private nn: Object = {
    logo: 'assets/img/eenNN-logo.png'
  };
  loading = false;
  submitted = false;
  returnUrl: string;
  user: User = new User();

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  navigateTo(path: String, data?: any) {
    if (data)
      this.router.navigate([path, JSON.stringify(data)]);
    else
      this.router.navigate([path]);
  }

  login() {
    this.user.token = 'b511629a-84f4-3cb8-b234-0d5cf278bb27';
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    this.navigateTo(this.returnUrl);
  }


  onSubmit() {

    this.loading = true;
    this.authenticationService.login(this.user.username, this.user.password)
      .pipe(first())
      .subscribe(
        data => {
          this.navigateTo(this.returnUrl);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }
}
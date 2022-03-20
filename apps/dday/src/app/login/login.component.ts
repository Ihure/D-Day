import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
@Component({
  selector: 'madiro-hack-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: SocialUser = new SocialUser();
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {}

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.socialAuthService.authState.subscribe((user) => {
        this.user = user;
        // if user exists send to backend to register user and get token for app the login user
        if (this.user) {
          // TODO: register user then navigate to dashboard
          this.router.navigate(['dashboard']);
        }
        console.log(user);
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private titleService: Title,
              public auth: AuthService) {}

  profileJson: string = null;
  t: any;

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
    );
  }

  openNav() {
    document.getElementById('myNav').style.height = '100%';
  }

  closeNav() {
    document.getElementById('myNav').style.height = '0%';
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
    this.closeNav();
    }
    
  logout(): void {
      this.auth.logout()
  }

}


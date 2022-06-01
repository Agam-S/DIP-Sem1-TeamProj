import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  t: string;

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
    );
    // profile info
    this.auth.idTokenClaims$.subscribe((claims) => console.log(claims));

    // profile token
    this.auth.user$.subscribe((user) => {
    this.t = user.sub;
    console.log(this.t)
    localStorage.setItem('id_token', JSON.stringify(this.t));
    });
  }

  openNav() {
    document.getElementById('myNav').style.height = '100%';
  }

  closeNav() {
    document.getElementById('myNav').style.height = '0%';
  }

  async loginWithRedirect() {
    await this.auth.loginWithRedirect();
    this.closeNav();
  }
    
  logout(): void {
      this.auth.logout()
      localStorage.removeItem('id_token');
  }
}


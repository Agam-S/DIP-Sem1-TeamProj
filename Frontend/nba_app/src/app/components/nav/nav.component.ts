import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private titleService: Title,
              public auth: AuthService) {}

  ngOnInit(): void {}

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


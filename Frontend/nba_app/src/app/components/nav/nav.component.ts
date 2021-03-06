import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService, User } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private titleService: Title,
              public auth: AuthService, private http: HttpClient) {}

  t: string;
  metadata = {};

  ngOnInit(): void {
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


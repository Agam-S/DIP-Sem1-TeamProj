import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {}

  openNav() {
    document.getElementById('myNav').style.height = '100%';
  }

  closeNav() {
    document.getElementById('myNav').style.height = '0%';
  }
}

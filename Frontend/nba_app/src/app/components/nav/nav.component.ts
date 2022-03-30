import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}

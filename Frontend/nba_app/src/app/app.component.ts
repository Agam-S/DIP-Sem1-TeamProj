import { Component, OnInit } from '@angular/core';


interface Message {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = null;

  constructor() {}

  ngOnInit(): void {}


}
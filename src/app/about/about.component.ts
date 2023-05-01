import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { 
    console.log("constructor called on about")
  }

  ngOnInit(): void {
    console.log("this is about")
  }

}

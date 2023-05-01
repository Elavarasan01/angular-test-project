import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.sass']
})
export class LifecycleComponent implements OnInit,DoCheck,OnChanges {

  isChild=true;
 

  @Input()
   Childworks="";

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
 console.log("onChange called")
  }
  ngOnInit(): void {
    console.log("OnInit is called")
  }

  childClick(){
    this.isChild=!this.isChild
  }

  ngDoCheck(): void {
    console.log("DoCheck called");
  }

}

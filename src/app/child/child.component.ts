import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit,OnDestroy ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked{

 

  // counter=0;
  // interval:any;
  constructor() { }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked called");
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit called");
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log("child onchanges called");
  }
  ngOnDestroy(): void {
    // clearInterval(this.interval)
  console.log("child destroyed")
  }

  ngOnInit(): void {
    console.log("child OnInit is called")
    // this.interval=setInterval(()=>{
    //   this.counter=this.counter+1;
    //   console.log(this.counter)
    // },1000)
  }

  ngDoCheck(): void {
    console.log("child DoCheck called");
  }

}

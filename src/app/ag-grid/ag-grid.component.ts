
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      this.Elliot.push(i)
    }
    console.log(this.Elliot)
  }
  Elliot: any = [];
  onScroll() {
    const length = this.Elliot.length;
    setTimeout(() => {
      const p: any = ' '.repeat(100).split('').map((s, i) => i + 1 + length);
      while (p.length) this.Elliot.push(p.shift());
    }, 1000);
  }
}

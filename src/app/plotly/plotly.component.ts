import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.sass']
})
export class PlotlyComponent implements OnInit {
  [x: string]: any;
  

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  fruits={
    data:[
    { x:["Oranges","Apples", "Bananas"],y:["40%","70%","50%"]}
    ],
    config:{
      responsive:true
    }
}

Earth = {
  data: [ { x: [1, 2, 3, 4],y: [10, 8, 3, 1],
  mode: 'markers',
  marker: {size: [80, 60, 50, 20]}}],
  
  layout: [{title: 'Measurement of Earth',
  showlegend: true,
  width: 500,
  height: 500}],
  config:{
    responsive:true
  }
};
 
  population = {
    data: [
      { x: [2018, 2019, 2020, 2021, 2022, 2023], y: [50, 30, 70, 20, 60], type: 'bar' },
    ],
    layout: {title: 'Population in india last 6 years',width: 700,height: 500},
    config:{
      displaylogo: false,
      response:true
    }
  };
  
  mivscsk = {
    data: [
      { x: [1, 2, 3, 4, 5], y: [1, 4, 6, 8, 7], type: 'scatter' },
      { x: [1, 2, 3, 4], y: [1, 1.5, 8, 8 ], type: 'scatter' },
    ],
    layout: {title: 'Comparison chat',width: 700,height: 500},
    config:{
      responsive:true,
      staticPlot:true
    }
  };

  graph3 = {
    data: [
      {
            values: [16, 15, 12, 10, 23,20],
            labels: ['CSK', 'MI', 'RCB', 'KKR','Other teams','SRH'],
            domain: {column: 0},
            name: 'Winning percentage',
            hoverinfo: 'label+percent+name',
            hole: .3,
            type: 'pie'
          }
    ],
    layout:{
      title: 'Ipl winning chart',
      annotations: [
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: 'IPL',
          x: 0.2,
          y: 0.5
        }
      ],
    
      height: 600,
      width: 900,
      showlegend: true,
      grid: {rows: 1, columns: 2}
    },
  
  }

  private trace1 = {
    x:['2020-10-04', '2021-11-04', '2023-12-04'],
    y: [90, 40, 60],
    type: 'scatter'
  };

 data = [this.trace1];

 layout = {
    title: 'Public transport',
    showlegend: false
  
 };
 config={
  scrollZoom: true,
  displayModeBar:false
 }

Quick ={
  data : [{
    x:['trees', 'flowers', 'hedges'], 
    y: [90, 130, 40],
    type: 'bar'}],
  
   layout : {
    title: 'without photo icon',
    showlegend: false},
  
    config:{
      modeBarButtonsToRemove: ['toImage']
    }
}
 

   trace = {
    x:['2019','2020', '2021', '2022'],
    y: [50, 45, 40, 60],
    type: 'bar',
    name: 'MI'
  }
  trace2 = {
    x:['2019','2020', '2021', '2022'],
    y: [50, 30, 80, 45],
    type: 'bar',
    name: 'SRH'
  }
  trace3 = {
    x:['2019','2020', '2021', '2022'],
    y: [10, 50, 40, 65],
    type: 'bar',
    name: 'RCB'
  }
    chart={
   data : [this.trace,this.trace2 ,this.trace3],
  
   layout : {
    title: 'Edit Modebar',
    showlegend: true
  },
  config:{
    showEditInChartStudio: true,
    plotlyServerURL: "https://chart-studio.plotly.com"
  }
  }

   line1 = {
    x: [0, 1, 2, 3, 4],
    y: [1, 5, 3, 7, 5],
    mode: 'lines+markers',
    type: 'scatter'
  };
  
   line2 = {
    x: [1, 2, 3, 4, 5],
    y: [4, 0, 4, 6, 8],
    mode: 'lines+markers',
    type: 'scatter'
  };
  
  linechart={
    data : [this.line1, this.line2],
    layout : {title: 'Click Here<br>to Edit Chart Title'},
    config:{editable:true}
  }
  


 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

}

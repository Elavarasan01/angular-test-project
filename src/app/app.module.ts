import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { PlotlyModule } from 'angular-plotly.js';
import * as Plotly from 'plotly.js-dist-min';
import { CrudComponent } from './crud/crud.component'
import { HttpClientModule } from '@angular/common/http';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './child/child.component';
import {UserlistComponent} from './userlist/userlist.component';
import { AgGridComponent } from './ag-grid/ag-grid.component'
import { AgGridModule } from 'ag-grid-angular';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AgngularGridComponent } from './agngular-grid/agngular-grid.component';
import { GraphsComponent } from './graphs/graphs.component';

PlotlyModule.plotlyjs = Plotly;

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AboutComponent,
    RegisterComponent,
    PlotlyComponent,
    CrudComponent,
    LifecycleComponent,
    ChildComponent,
    UserlistComponent,
    AgGridComponent,
    AgngularGridComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PlotlyModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    InfiniteScrollModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

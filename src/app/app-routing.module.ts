import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgngularGridComponent } from './agngular-grid/agngular-grid.component';
import { AuthGuard } from './auth.guard';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LoginComponent } from './login/login.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'plotly',canActivate:[AuthGuard],component:PlotlyComponent},
  {path:'crud',component:CrudComponent},
  {path:'lifecycle',component:LifecycleComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'ag-grid',component:AgGridComponent},
  {path: 'agngular-grid', component:AgngularGridComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent]

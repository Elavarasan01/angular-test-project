import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'project1';
  // constructor(private users:UsersService){
  //   this.users.getData().subscribe(data=>{
  //     console.warn(data)
  //   })
  // }
}

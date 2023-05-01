import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../apicall/data.service';
import { UserModule } from './userDetail.module';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.sass']
})
export class CrudComponent implements OnInit {
 
  formValue ! :FormGroup;
  UserModelObj : UserModule = new UserModule()
  UserData ! :any;
  showAdd !:boolean;
  showUpdate !:boolean;
  constructor(private formbuilder:FormBuilder,private data :DataService) { }

  ngOnInit(): void {
    this.formValue =this.formbuilder.group({
      name :[''],
      city :['']
    })
    this.getAllUser();
  }
  
  clickAddUser(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postUserDetail(){
    this.UserModelObj.name=this.formValue.value.name;
    this.UserModelObj.city=this.formValue.value.city;

    this.data.postUser(this.UserModelObj)
    .subscribe(res=>{
      console.log(res)
      alert("New user added")
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formValue.reset()
      this.getAllUser();
      this.showAdd=false;
    },

    err=>{
     alert("error occured")
    })
  }

  getAllUser(){
    this.data.getUser()
    .subscribe(res=>{
      this.UserData =res
    })
  }
  
  deleteUser(row:any){
    this.data.deleteUser(row.id)
    .subscribe(res=>{
    this.getAllUser()
    })
  }
 
 onEdit(row:any){
  this.showAdd=false;
  this.showUpdate=true;
   this.UserModelObj.id=row.id
   this.formValue.controls['name'].setValue(row.name)
   this.formValue.controls['city'].setValue(row.city)
 }
 updateUserDetail(){
  this.UserModelObj.name=this.formValue.value.name;
  this.UserModelObj.city=this.formValue.value.city;

  this.data.editUser(this.UserModelObj,this.UserModelObj.id)
  .subscribe(res=>{
    let ref =document.getElementById('cancel')
    ref?.click();
    this.formValue.reset()
    this.getAllUser()
  })
 }
}
 
 

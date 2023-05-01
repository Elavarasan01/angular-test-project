import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  returnUrl!: string;
 [x:string]:any;
  users: any;
  register!:FormGroup;
  id:any=6;
  constructor(private formBuilder: FormBuilder, private router:Router,private commenServ:CommonService) { }

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      Name: ['',[ Validators.minLength(4), Validators.required,Validators.pattern("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")]],
      email: ['',Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ])],
      mobile: ['',Validators.compose([
        Validators.required,
       
        Validators.pattern('[6-9]\\d{9}')
      ]),],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      password: ['',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)])],
    cnpass: ['',  Validators.required],
    check: ['', Validators.required],
    },
    {
       validators: this.MustMatch('pass','cnpass')   
    })
    console.log(this.register)
  }
  

  get f(): { [key: string]: AbstractControl } {
    return this.register.controls;
  }

  MustMatch(ControlName: string, matchingControlName: string){
    return(FormGroup: FormGroup)=>{
     const control=FormGroup.controls[ControlName];
     const MatchingControl=FormGroup.controls[matchingControlName];
     if(MatchingControl.errors && ! MatchingControl.errors['MustMatch']){
       return
     }
     if(control.value !==MatchingControl.value){
       MatchingControl.setErrors({MustMatch:true});
     }
     else{
       MatchingControl.setErrors(null);
     }
    }
     }

  submit(data:any){
    let userCredential={
      email:data.email,
      password:data.password,
      id:this.id++
    }

    this.commenServ.addUser(userCredential).subscribe((data:any)=>{
      console.log(data);
    })
    this.submitted = true;

    if (this.register.invalid) {
      return;
    }
    if (this.register.valid) {
      this.users = this.register.value;
      // this.Employlees.push(this.registerform.value);
     this.router.navigate(['login']);
    }
 
    console.log(JSON.stringify(this.register.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.register.reset();
  }
  
}

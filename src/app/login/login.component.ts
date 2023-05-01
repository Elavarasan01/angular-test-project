import { Component, OnInit ,Input} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
 // loginForm!: FormGroup;
  // @Input() hero:any;

  submitted = false;
  returnUrl!: string;
 [x:string]:any;
  user: any=[];
 form!:FormGroup;

 constructor(private formBuilder: FormBuilder, private router:Router,private commserv:CommonService) { }

  ngOnInit():void {
    this.form = this.formBuilder.group({
      email: ['',Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ])],
      password: ['',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)])]
  })

  this.commserv.getUser().subscribe((data:any): void=>{
    this.user=data;
  })
}

get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}

onSubmit(data:any){
  if(data.email){
    this.user.forEach((item:any) => {
       if(item.email===data.email&&item.password===data.password){
         localStorage.setItem("isLoggedIn","true");
         this.router.navigate(['plotly'])
       } 
       else{ 
        localStorage.clear();
       }     
    });
  }
  this.submitted = true;

  if (this.form.invalid) {
    return;
  }
  if (this.form.valid) {
    this.user = this.form.value;
    // this.Employlees.push(this.registerform.value);
   // this.router.navigate(['plotly']);
  }

  console.log(JSON.stringify(this.form.value, null, 2));
}
onReset(): void {
  this.submitted = false;
  this.form.reset();
}
}


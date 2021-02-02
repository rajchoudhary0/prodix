import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup  } from "@angular/forms";
import {  LoginServiceService} from "../service/login-service.service";
import {AlertService} from 'ngx-alerts';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private router:Router,private fb:FormBuilder,private srvc:LoginServiceService,private alert:AlertService) { }

  ngOnInit(): void {
    this.formValidation();

  }
  formValidation(){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  logInUser(){
    console.log(this.loginForm.value.username);
    // this.srvc.loginUser(this.loginForm.value.username,this.loginForm.value.password).subscribe({
    //   next:(res:any)=>{
    //     if(!res.success){
    //       this.alert.warning(res.message);
    //       this.loginForm.reset();
    //       return false;
    //     }
    //     //this.router.navigateToPath('feature','search-recording');
    //     localStorage.setItem('token',res.token);
    //   },
    //   error:(e)=>{
    //     this.alert.danger(e);        
    //   }
    // });
    if(this.loginForm.value.username==='wasim',this.loginForm.value.password==='123'){
      const res:any = [{"username":"wasim","password":"123","token":"abcaef4w9-e93jdvnmoaoi"}];
      this.router.navigateByUrl('feature/home');

      localStorage.setItem('token',res[0].token);
    }else{
      this.alert.danger('Sorry username and password is wrong');
    }
  }

}

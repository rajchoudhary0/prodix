import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {FeatureServiceService} from '../service/feature-service.service';
import {AlertService} from 'ngx-alerts';
import {FormBuilder,Validators,FormGroup  } from "@angular/forms";

@Component({
  selector: 'app-update-rcd',
  templateUrl: './update-rcd.component.html',
  styleUrls: ['./update-rcd.component.css']
})
export class UpdateRcdComponent implements OnInit {
  id:any;
  rcdForm:FormGroup;

  constructor(private fb:FormBuilder,private $route:ActivatedRoute,private srvc:FeatureServiceService,private alert:AlertService) { }

  ngOnInit(): void {
   
    this.formValidation();

  }
  formValidation(){
    this.rcdForm=this.fb.group({
      email:['',Validators.required],
      name:['',Validators.required],
      subject:['',Validators.required],
      msg:['',Validators.required],

    });
  }
  
  sendFeedBack(){
    const email=this.rcdForm.value.email;
    const name=this.rcdForm.value.name;
    let msg=this.rcdForm.value.msg;
    let sub=this.rcdForm.value.subject;

    this.srvc.sendFeedBack(email,name,msg,sub).subscribe({
      next:(res:any)=>{
        if(!res.success){
          this.alert.danger(res.error);
          return false;
        }
        this.rcdForm.reset();
        this.alert.success(res.msg);
      },
      error:(e)=>{
        this.alert.danger(e);
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { FeatureServiceService } from '../service/feature-service.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-new-rcd',
  templateUrl: './new-rcd.component.html',
  styleUrls: ['./new-rcd.component.css']
})
export class NewRcdComponent implements OnInit {
  rcdForm: FormGroup;
  constructor(private fb: FormBuilder, private srvc: FeatureServiceService, private alert: AlertService) { }

  ngOnInit(): void {
    this.formValidation();

  }
  formValidation() {
    this.rcdForm = this.fb.group({
      hostname: ['', Validators.required],
      ip: ['', Validators.required],
      cpu: ['', Validators.required],
      ram: ['', Validators.required],
      location: ['', Validators.required]

    });
  }


}

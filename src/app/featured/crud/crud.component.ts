import { Component, OnInit, ViewChild } from '@angular/core';
import {FeatureServiceService} from '../service/feature-service.service';
import {AlertService} from 'ngx-alerts';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  displayedColumns: string[] = ['id', 'hostname', 'ip', 'cpu','ram','location','action'];
  dataSource= new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private srvc:FeatureServiceService,private alert:AlertService,private router:Router) { }

  ngOnInit(): void {
  }

 
}

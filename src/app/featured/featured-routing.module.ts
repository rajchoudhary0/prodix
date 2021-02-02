import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrudComponent} from '../featured/crud/crud.component';
import { NewRcdComponent } from './new-rcd/new-rcd.component';
import { UpdateRcdComponent } from './update-rcd/update-rcd.component';
import { HomeComponent } from './home/home.component';

import {AuthGuard} from '../shared/auth/auth.guard';
const routes: Routes = [
  //{path:'',component:CrudComponent},
  {path:'aboutus',component:NewRcdComponent},
  {path:'contactus',component:UpdateRcdComponent},
  {path:'',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedRoutingModule { }

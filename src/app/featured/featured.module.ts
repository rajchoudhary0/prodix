import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedRoutingModule } from './featured-routing.module';
import {SharedModule} from '../shared/shared.module';
import { CrudComponent } from './crud/crud.component';
import { NewRcdComponent } from './new-rcd/new-rcd.component';
import { UpdateRcdComponent } from './update-rcd/update-rcd.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [CrudComponent, NewRcdComponent, UpdateRcdComponent, HomeComponent],
  imports: [
    CommonModule,
    FeaturedRoutingModule,
    SharedModule  ]
})
export class FeaturedModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreModule} from '../app/core/core.module';
import {FeaturedModule} from '../app/featured/featured.module';
const routes: Routes = [
  // {path:'core',loadChildren:()=>import ('./core/core.module').then(m=>m.CoreModule)},
  // {path:'',loadChildren:()=>import ('./core/core.module').then(m=>m.CoreModule)},

  {path:'',loadChildren:()=>import ('./featured/featured.module').then(m=>m.FeaturedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

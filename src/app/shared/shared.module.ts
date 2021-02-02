import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule  } from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    FormsModule,ReactiveFormsModule,
    CommonModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatToolbarModule,MatMenuModule
    ,MatTableModule,MatPaginatorModule,MatSelectModule,MatAutocompleteModule
  ],
  exports:[FormsModule,ReactiveFormsModule,HeaderComponent,FooterComponent,
    MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatToolbarModule,MatMenuModule
    ,MatTableModule,MatPaginatorModule,MatSelectModule,MatAutocompleteModule]
})
export class SharedModule { }

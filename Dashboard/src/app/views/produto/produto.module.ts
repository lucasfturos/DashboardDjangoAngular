import { DeleteProdutoComponent } from './delete/delete.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateComponent } from './create/create.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    DeleteProdutoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ProdutoModule { }

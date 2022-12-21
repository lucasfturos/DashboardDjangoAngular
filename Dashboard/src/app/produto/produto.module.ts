import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { DialogProdutoComponent } from './dialog-produto/dialog-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    DialogProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProdutoModule { }

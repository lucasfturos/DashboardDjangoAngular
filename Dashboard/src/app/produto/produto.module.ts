import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { DialogProdutoComponent } from './dialog-produto/dialog-produto.component';


@NgModule({
  declarations: [
    CreateComponent,
    DialogProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
  ]
})
export class ProdutoModule { }

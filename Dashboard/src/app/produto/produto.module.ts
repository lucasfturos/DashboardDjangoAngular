import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';


@NgModule({
  declarations: [
    CreateComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
  ]
})
export class ProdutoModule { }

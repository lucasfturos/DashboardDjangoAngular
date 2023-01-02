import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheComponent } from './detalhe/detalhe.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    CreateComponent,
    DetalheComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ControleUsuarioModule { }

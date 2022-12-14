import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const produtoRoutes: Routes = [

  { path: 'produto/create', component: CreateComponent, data: { title: 'Adiciona Produto' } },
  { path: 'produto/create/:id', component: CreateComponent, data: { title: 'Edita Produto' } },
];

@NgModule({
  imports: [RouterModule.forChild(produtoRoutes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }

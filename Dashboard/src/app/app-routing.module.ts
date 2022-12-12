import { NotFoundComponent } from './not-found/not-found.component';
import { ProdutoComponent } from './produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BaseDeDadoComponent } from './base-de-dado/base-de-dado.component';

const routes: Routes = [
  { path: 'produto', component: ProdutoComponent, data: { title: 'Produto' } },
  { path: 'produto/:id', component: ProdutoComponent, data: { title: 'Produto' } },
  { path: 'base', component: BaseDeDadoComponent, data: { title: 'Base de Dados' } },
  { path: '404', component: NotFoundComponent, data: { title: 'Page not found' } },
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Inicio' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

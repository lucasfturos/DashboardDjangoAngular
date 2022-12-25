import { PainelAdminComponent } from './views/painel-admin/painel-admin.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BaseDeDadoComponent } from './views/base-de-dado/base-de-dado.component';

const appRoutes: Routes = [
  { path: 'produto', component: ProdutoComponent, data: { title: 'Produto' } },
  { path: 'base', component: BaseDeDadoComponent, data: { title: 'Base de Dados' } },
  { path: '404', component: NotFoundComponent, data: { title: 'Page not found' } },
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Inicio' } },
  { path: 'painel_admin', component: PainelAdminComponent, data: { title: 'Administração' } }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

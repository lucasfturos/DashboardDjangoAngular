import { SuperuserComponent } from './views/superuser/superuser.component';
import { ControleUsuarioComponent } from './views/controle-usuario/controle-usuario.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BaseDeDadoComponent } from './views/base-de-dado/base-de-dado.component';

const appRoutes: Routes = [
  { path: 'produto', component: ProdutoComponent, data: { title: 'Produto' } },
  { path: 'login', component: SuperuserComponent, data: { title: 'Log-in' } },
  { path: 'controle_usuario', component: ControleUsuarioComponent, data: { title: 'Controle de Usuario' } },
  { path: 'base_de_dados', component: BaseDeDadoComponent, data: { title: 'Base de Dados' } },
  { path: '404', component: NotFoundComponent, data: { title: 'Page not found' } },
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Inicio' } },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { SuperuserComponent } from './views/superuser/superuser.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoService } from './services/produto/produto.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './views/produto/produto.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { BaseDeDadoComponent } from './views/base-de-dado/base-de-dado.component';
import { ProdutoModule } from './views/produto/produto.module';
import { UserService } from './services/users/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ControleUsuarioComponent } from './views/controle-usuario/controle-usuario.component';
import { SuperuserModule } from './views/superuser/superuser.module';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    NotFoundComponent,
    HomeComponent,
    BaseDeDadoComponent,
    ControleUsuarioComponent,
    SuperuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProdutoModule,
    SuperuserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    ProdutoService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

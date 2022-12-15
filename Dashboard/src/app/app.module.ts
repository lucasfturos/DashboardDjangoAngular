import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoService } from './services/produto/produto.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './produto/produto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseDeDadoComponent } from './base-de-dado/base-de-dado.component';
import { ProdutoModule } from './produto/produto.module';
import { UserService } from './services/users/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    NotFoundComponent,
    HomeComponent,
    BaseDeDadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProdutoModule
  ],
  providers: [
    ProdutoService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

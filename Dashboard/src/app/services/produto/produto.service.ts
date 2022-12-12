import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './../../models/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiRoot = 'http://localhost:8000/produto/'
  constructor(private _http: HttpClient) { }

  getListProduto(): Observable<Produto[]> {
    return this._http.get<Produto[]>(this.apiRoot);
  }
  // Pesquisar e mostrar detalhes de um dado
  getOnlyProduto(id: any): Observable<Produto> {
    let ids = id;
    return this._http.get<Produto>(`${this.apiRoot}/${ids}`);
  }
}

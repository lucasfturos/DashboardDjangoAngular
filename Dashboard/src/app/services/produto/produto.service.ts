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

  getOnlyProduto(id: any): Observable<Produto> {
    return this._http.get<Produto>(`${this.apiRoot}${id}`);
  }

  createProduto(data: any): Observable<any> {
    return this._http.post(`${this.apiRoot}create`, data);
  }

  updateProduto(data: any, id: any): Observable<any> {
    return this._http.put(`${this.apiRoot}create/${id}`, data);
  }

  destroyProduto(id: any): Observable<any> {
    return this._http.delete(`${this.apiRoot}${id}`);
  }

}

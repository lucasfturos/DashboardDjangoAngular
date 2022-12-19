import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './../../models/produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiRoot = 'http://localhost:8000/produto/'

  constructor(private http: HttpClient) { }

  getListProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiRoot);
  }

  getOnlyProduto(id: any): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiRoot}${id}`);
  }

  createProduto(data: any): Observable<any> {
    return this.http.post(`${this.apiRoot}create`, data);
  }

  updateProduto(data: any, id: any): Observable<any> {
    return this.http.put(`${this.apiRoot}create/${id}`, data);
  }

  destroyProduto(id: any): Observable<any> {
    return this.http.delete(`${this.apiRoot}${id}`);
  }

}

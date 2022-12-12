import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto/produto.service';

@Component({
  selector: 'app-base-de-dado',
  templateUrl: './base-de-dado.component.html',
  styleUrls: ['./base-de-dado.component.css']
})
export class BaseDeDadoComponent implements OnInit {
  itens: any;
  produto?: Produto[];

  constructor(
    private service: ProdutoService,
  ) { }

  ngOnInit(): void {
    this.showAllDataProducts();
  }

  showAllDataProducts(): void {
    this.service.getListProduto()
      .subscribe({
        next: (data) => {
          this.produto = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}

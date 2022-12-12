import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto/produto.service';
import { Produto } from '../models/produto.model';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  itens: any;
  produto?: Produto[];

  constructor(
    private service: ProdutoService,
  ) {
  }

  ngOnInit(): void {
    this.showAllData();
  }

  showAllData(): void {
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

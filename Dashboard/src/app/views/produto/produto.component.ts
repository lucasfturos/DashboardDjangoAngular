import { DeleteProdutoComponent } from './delete/delete.component';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto/produto.service';
import { Produto } from '../../models/produto.model';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';


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
    private dialog: MatDialog,
  ) { }

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

  createProdutoDialog(id: any) {
    const dialogRefCreate = this.dialog.open(CreateComponent, {
      width: '80%',
      height: '90%',
      data: id,
      panelClass: 'createContainer'
    });
  }

  async warningAlert(id: any, nomeProduto: any) {
    const dialogRef = this.dialog.open(DeleteProdutoComponent, {
      width: '350px',
      height: '20%',
      data: {
        produto: nomeProduto,
        id_produto: parseInt(id)
      },
      disableClose: false
    });
  }
}

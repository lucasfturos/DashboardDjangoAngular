import { DeleteProdutoComponent } from './delete/delete.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProdutoService } from '../../services/produto/produto.service';
import { Produto } from '../../models/produto.model';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { CreateComponent } from './create/create.component';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  itens: any;
  produto?: Produto[];
  search!: any;
  @ViewChild('searchInput', { static: true }) searchInput?: any;

  constructor(
    private service: ProdutoService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.showAllData();
    this.showSearchProduto();
  }

  showSearchProduto() {
    this.search = this.searchInput.nativeElement.value
  }

  cleanSearch() {
    this.searchInput.nativeElement.value = '';
    this.showSearchProduto();
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
      panelClass: 'createProdutoContainer'
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

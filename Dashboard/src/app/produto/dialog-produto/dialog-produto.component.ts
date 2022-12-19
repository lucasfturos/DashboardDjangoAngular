import { DialogRef } from '@angular/cdk/dialog';
import { ProdutoService } from './../../services/produto/produto.service';
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrls: ['./dialog-produto.component.css'],
})
export class DialogProdutoComponent {

  constructor(
    public dialogRef: DialogRef<DialogProdutoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ProdutoService
  ) { }

  deleteData(id: any): void {
    this.service.destroyProduto(id).subscribe(res => {
      window.location.reload();
    })
  }
  onConfirmClick(): void {
    this.deleteData(this.data.id_produto);
    this.dialogRef.close();
  }
}

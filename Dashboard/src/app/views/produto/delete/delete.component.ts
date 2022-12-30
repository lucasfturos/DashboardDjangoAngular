import { DialogRef } from '@angular/cdk/dialog';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Component, Inject, Optional } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteProdutoComponent {

  constructor(
    public dialogRef: DialogRef<DeleteProdutoComponent>,
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

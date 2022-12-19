import { DialogRef } from '@angular/cdk/dialog';
import { ProdutoService } from './../../services/produto/produto.service';
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrls: ['./dialog-produto.component.css'],
  providers: [ProdutoService]
})
export class DialogProdutoComponent {
  local_data: any;
  action?: string;

  constructor(
    private dialogRef: DialogRef<DialogProdutoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Produto,
  ) { }

  confirmDelete(ev: any) {

  }

  closeDialog() {
    this.dialogRef.close();
  }
}

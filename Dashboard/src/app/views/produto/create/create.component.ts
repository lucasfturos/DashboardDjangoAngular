import { Produto } from '../../../models/produto/produto.model';
import { ProdutoService } from '../../../services/produto/produto.service';
import { Component, Inject } from '@angular/core';
import { NonNullableFormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  getParamId: any;
  isSubmitted: boolean = false;
  formProduto!: FormGroup;
  produto: any;

  constructor(
    private service: ProdutoService,
    private formBuilder: NonNullableFormBuilder,
    public dialogRefCreate: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public id_produto: any,
  ) {
    this.formProduto = formBuilder.group({
      nome_produto: new FormControl(''),
      descricao_produto: new FormControl(''),
      preco_produto: new FormControl(0),
      quantidade_produto: new FormControl(0),
    });
    if (this.id_produto == -1) {
      this.createForm(new Produto());
    }

    console.log(this.id_produto);

    if (this.id_produto != -1) {
      this.service.getOnlyProduto(this.id_produto)
        .subscribe({
          next: (data) => {
            console.log(data);
            if (!!data) {
              this.produto = data;
              this.setUpdateValues(this.produto);
            }
          },
          error: (e) => console.error(e)
        });
    }
  }

  createForm(produto: Produto) {
    this.formProduto = this.formBuilder.group({
      nome_produto: [produto.nome_produto],
      descricao_produto: [produto.descricao_produto],
      preco_produto: [produto.preco_produto],
      quantidade_produto: [produto.quantidade_produto],
    });
  }

  setUpdateValues(produto: any) {
    this.formProduto.patchValue({
      nome_produto: produto[0].nome_produto,
      descricao_produto: produto[0].descricao_produto,
      preco_produto: produto[0].preco_produto,
      quantidade_produto: produto[0].quantidade_produto
    });
  }

  get errorControl() {
    return this.formProduto.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.formProduto.valid) {
      console.log(this.errorControl);
    }
    if (this.formProduto.valid) {
      console.log(this.formProduto.value);
      this.service.createProduto(this.formProduto.value).subscribe((res) => {
        console.log('res:', res);
        this.formProduto.reset();
      });
      window.location.reload();
    }
  }

  onUpdate() {
    this.isSubmitted = true;
    if (!this.formProduto.valid) {
      console.log(this.errorControl);
    }
    if (this.formProduto.valid) {
      console.log(this.formProduto.value);
      this.service.updateProduto(this.formProduto.value, this.id_produto).subscribe((res) => {
        console.log('res:', res);
        this.formProduto.reset();
      });
      window.location.reload();
    }
  }
}

import { Produto } from './../../models/produto.model';
import { ProdutoService } from './../../services/produto/produto.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { NonNullableFormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  getParamId: any;
  isSubmitted: boolean = false;
  formProduto!: FormGroup;
  produto!: Produto;

  constructor(
    private activeRouter: ActivatedRoute,
    private service: ProdutoService,
    private formBuilder: NonNullableFormBuilder,
    public dialogRefCreate: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.createForm(new Produto());

    console.log(this.data);

    if (this.data != -1) {
      this.service.getOnlyProduto(this.data)
        .subscribe({
          next: (res: Produto) => {
            this.produto = res;
            this.setUpdateValues(this.produto, this.data);
          },
          error: (e) => console.error(e)
        });
    }
  }

  setUpdateValues(produto: Produto, id: number) {
    console.log('Res: ', produto);
    this.formProduto.patchValue({
      nome_produto: produto.nome_produto,
      descricao_produto: produto.descricao_produto,
      preco_produto: produto.preco_produto,
      quantidade_produto: produto.quantidade_produto,
    });
  }

  get errorControl() {
    return this.formProduto.controls;
  }

  createForm(produto: Produto) {
    this.formProduto = this.formBuilder.group({
      nome_produto: [produto.nome_produto],
      descricao_produto: [produto.descricao_produto],
      preco_produto: [produto.preco_produto],
      quantidade_produto: [produto.quantidade_produto],
    });
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
      this.service.updateProduto(this.formProduto.value, this.data).subscribe((res) => {
        console.log('res:', res);
        this.formProduto.reset();
      });
      window.location.reload();
    }
  }

}

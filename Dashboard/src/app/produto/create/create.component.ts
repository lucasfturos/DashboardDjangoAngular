import { ProdutoService } from './../../services/produto/produto.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  getParamId: any;
  isSubmitted: any;

  formProduto = new FormGroup({
    nome_produto: new FormControl('', Validators.required),
    descricao_produto: new FormControl('', Validators.required),
    preco_produto: new FormControl('', Validators.required),
    quantidade_produto: new FormControl('', Validators.required),
  });

  constructor(
    private activeRouter: ActivatedRoute,
    private service: ProdutoService,
  ) { }

  ngOnInit(): void {
    this.getParamId = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.getParamId);

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
    }

  }

  onUpdate() {
    console.log(this.formProduto.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  titulo = 'Formulário de Produtos';
  produto = new Produto();

  constructor(private service: ProdutoService) { }

  ngOnInit() {
  }

  salvarProduto(){
    this.service.adicionar(this.produto);
    this.produto = new Produto();
  }



}

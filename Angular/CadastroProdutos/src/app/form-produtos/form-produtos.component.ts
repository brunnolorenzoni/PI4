import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Produto } from '../produto';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  
  titulo = 'Formulário de Produtos';
  @Output() produtoOutput: EventEmitter<any> = new EventEmitter();
  produto = new Produto();

  constructor() { }

  ngOnInit() {
  }

  salvarProduto(){
    this.produtoOutput.emit(this.produto);
  }
  
  // capturaInput(evento){
  //   this.produto = evento.target.value;    
  // }
}

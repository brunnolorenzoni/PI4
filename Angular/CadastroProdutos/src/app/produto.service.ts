import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = [
    {id:1,nome:"Produto 1",preco:100.00},
    {id:2,nome:"Produto 2",preco:200.00},
    {id:3,nome:"Produto 3",preco:300.00},
    {id:4,nome:"Produto 4",preco:400.00},
    {id:5,nome:"Produto 5",preco:500.00},
    {id:6,nome:"Produto 6",preco:600.00},
  ]
  constructor() { }

  adicionar(produto: Produto){
    this.produtos.push(produto);
  }

  listar(): Produto[]{
    return(this.produtos);
  }
}

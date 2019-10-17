import { Component } from '@angular/core';

import { Produto } from './produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-produtos';
  produtos: Produto[] = [
    {
      id:1, 
      nome:"Produto 1",
    },
    {
      id:2, 
      nome:"Produto 2",
    },
    {
      id:3, 
      nome:"Produto 3",
    },
    
      {id:4, 
      nome:"Produto 4",
    },
    {
      id:5, 
      nome:"Produto 5",
    },
    {
      id:6, 
      nome:"Produto 6",
    },
  ];


  addProduto(produto){
    this.produtos.push(produto)
  }

}

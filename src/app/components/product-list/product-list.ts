import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem, NgFor],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products = [
    {
      id: 1,
      name: 'Notebook',
      price: 3500,
      imageUrl: 'img/produto1.jpg'
    },
    {
      id: 2,
      name: 'Mouse Gamer',
      price: 150,
      imageUrl: 'img/produto2.jpg'
    },
    {
      id: 3,
      name: 'Teclado Mecânico',
      price: 450,
      imageUrl: 'img/produto3.jpg'
    }
  ];

}

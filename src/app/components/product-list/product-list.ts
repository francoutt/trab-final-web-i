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
    { id: 1, name: 'Produto A', price: 19.99, imageUrl: 'https://picsum.photos/seed/1/400/300' },
    { id: 2, name: 'Produto B', price: 29.99, imageUrl: 'https://picsum.photos/seed/2/400/300' },
    { id: 3, name: 'Produto C', price: 39.99, imageUrl: 'https://picsum.photos/seed/3/400/300' }
  ];
}

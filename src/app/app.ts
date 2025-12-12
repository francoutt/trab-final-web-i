import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { SearchBar } from './components/search-bar/search-bar';
import { ProductList } from './components/product-list/product-list';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    SearchBar,
    ProductList,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}

import { Component, Input } from '@angular/core';
import { ProductsCardComponent } from '../products-card/products-card.component';

@Component({
  selector: 'app-products-liste',
  standalone: true,
  imports: [ProductsCardComponent],
  templateUrl: './products-liste.component.html',
  styleUrl: './products-liste.component.css'
})
export class ProductsListeComponent {

  @Input() products: any[] = []

}

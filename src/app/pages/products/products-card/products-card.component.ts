import { SlicePipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent {

  @Input() product!: any

}

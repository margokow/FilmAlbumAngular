import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListeComponent } from './products-liste.component';

describe('ProductsListeComponent', () => {
  let component: ProductsListeComponent;
  let fixture: ComponentFixture<ProductsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

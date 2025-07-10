import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailesComponent } from './product-detailes.component';

describe('ProductDetailesComponent', () => {
  let component: ProductDetailesComponent;
  let fixture: ComponentFixture<ProductDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

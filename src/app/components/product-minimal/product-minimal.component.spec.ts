import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMinimalComponent } from './product-minimal.component';

describe('ProductMinimalComponent', () => {
  let component: ProductMinimalComponent;
  let fixture: ComponentFixture<ProductMinimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMinimalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

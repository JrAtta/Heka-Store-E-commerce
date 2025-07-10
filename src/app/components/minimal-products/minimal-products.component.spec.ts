import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalProductsComponent } from './minimal-products.component';

describe('MinimalProductsComponent', () => {
  let component: MinimalProductsComponent;
  let fixture: ComponentFixture<MinimalProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinimalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasWishlistComponent } from './offcanvas-wishlist.component';

describe('OffcanvasWishlistComponent', () => {
  let component: OffcanvasWishlistComponent;
  let fixture: ComponentFixture<OffcanvasWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasWishlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffcanvasWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

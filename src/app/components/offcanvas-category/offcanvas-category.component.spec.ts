import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasCategoryComponent } from './offcanvas-category.component';

describe('OffcanvasCategoryComponent', () => {
  let component: OffcanvasCategoryComponent;
  let fixture: ComponentFixture<OffcanvasCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffcanvasCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

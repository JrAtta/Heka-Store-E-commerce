import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasMenuComponent } from './offcanvas-menu.component';

describe('OffcanvasMenuComponent', () => {
  let component: OffcanvasMenuComponent;
  let fixture: ComponentFixture<OffcanvasMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffcanvasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

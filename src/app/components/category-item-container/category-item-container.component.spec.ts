import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemContainerComponent } from './category-item-container.component';

describe('CategoryItemContainerComponent', () => {
  let component: CategoryItemContainerComponent;
  let fixture: ComponentFixture<CategoryItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryItemContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParentCategoryComponent } from './list-parent-category.component';

describe('ListParentCategoryComponent', () => {
  let component: ListParentCategoryComponent;
  let fixture: ComponentFixture<ListParentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParentCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

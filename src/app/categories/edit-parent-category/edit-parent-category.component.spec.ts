import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParentCategoryComponent } from './edit-parent-category.component';

describe('EditParentCategoryComponent', () => {
  let component: EditParentCategoryComponent;
  let fixture: ComponentFixture<EditParentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParentCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

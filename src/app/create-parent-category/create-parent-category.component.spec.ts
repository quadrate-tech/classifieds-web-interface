import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParentCategoryComponent } from './create-parent-category.component';

describe('CreateParentCategoryComponent', () => {
  let component: CreateParentCategoryComponent;
  let fixture: ComponentFixture<CreateParentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParentCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

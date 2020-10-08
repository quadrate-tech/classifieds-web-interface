import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubcategoryComponent } from './list-subcategory.component';

describe('ListSubcategoryComponent', () => {
  let component: ListSubcategoryComponent;
  let fixture: ComponentFixture<ListSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

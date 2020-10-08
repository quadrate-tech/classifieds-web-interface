import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdTypeComponent } from './edit-ad-type.component';

describe('EditAdTypeComponent', () => {
  let component: EditAdTypeComponent;
  let fixture: ComponentFixture<EditAdTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdTypeComponent } from './add-ad-type.component';

describe('AddAdTypeComponent', () => {
  let component: AddAdTypeComponent;
  let fixture: ComponentFixture<AddAdTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

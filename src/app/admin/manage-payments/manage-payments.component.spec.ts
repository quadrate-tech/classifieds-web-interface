import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePaymentsComponent } from './manage-payments.component';

describe('ManagePaymentsComponent', () => {
  let component: ManagePaymentsComponent;
  let fixture: ComponentFixture<ManagePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

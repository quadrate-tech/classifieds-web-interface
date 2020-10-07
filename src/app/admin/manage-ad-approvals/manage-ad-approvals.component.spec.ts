import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdApprovalsComponent } from './manage-ad-approvals.component';

describe('ManageAdApprovalsComponent', () => {
  let component: ManageAdApprovalsComponent;
  let fixture: ComponentFixture<ManageAdApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAdApprovalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

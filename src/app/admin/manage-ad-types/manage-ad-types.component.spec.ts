import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdTypesComponent } from './manage-ad-types.component';

describe('ManageAdTypesComponent', () => {
  let component: ManageAdTypesComponent;
  let fixture: ComponentFixture<ManageAdTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAdTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

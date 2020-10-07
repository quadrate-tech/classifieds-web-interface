import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDistrictsComponent } from './manage-districts.component';

describe('ManageDistrictsComponent', () => {
  let component: ManageDistrictsComponent;
  let fixture: ComponentFixture<ManageDistrictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDistrictsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

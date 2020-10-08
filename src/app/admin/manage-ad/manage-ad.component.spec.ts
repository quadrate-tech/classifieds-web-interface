import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdComponent } from './manage-ad.component';

describe('ManageAdComponent', () => {
  let component: ManageAdComponent;
  let fixture: ComponentFixture<ManageAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

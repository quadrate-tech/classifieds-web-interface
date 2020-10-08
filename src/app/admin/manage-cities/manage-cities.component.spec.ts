import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCitiesComponent } from './manage-cities.component';

describe('ManageCitiesComponent', () => {
  let component: ManageCitiesComponent;
  let fixture: ComponentFixture<ManageCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

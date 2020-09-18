import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTypeComponent } from './ad-type.component';

describe('AdTypeComponent', () => {
  let component: AdTypeComponent;
  let fixture: ComponentFixture<AdTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdTypeComponent } from './list-ad-type.component';

describe('ListAdTypeComponent', () => {
  let component: ListAdTypeComponent;
  let fixture: ComponentFixture<ListAdTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

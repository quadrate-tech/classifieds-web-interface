import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdComponent } from './list-ad.component';

describe('ListAdComponent', () => {
  let component: ListAdComponent;
  let fixture: ComponentFixture<ListAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

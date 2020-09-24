import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPromotionComponent } from './list-promotion.component';

describe('ListPromotionComponent', () => {
  let component: ListPromotionComponent;
  let fixture: ComponentFixture<ListPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

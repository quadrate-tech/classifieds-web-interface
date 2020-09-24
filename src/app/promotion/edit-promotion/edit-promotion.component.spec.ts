import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPromotionComponent } from './edit-promotion.component';

describe('EditPromotionComponent', () => {
  let component: EditPromotionComponent;
  let fixture: ComponentFixture<EditPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

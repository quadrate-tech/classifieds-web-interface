import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePromotionComponent } from './manage-promotion.component';

describe('ManagePromotionComponent', () => {
  let component: ManagePromotionComponent;
  let fixture: ComponentFixture<ManagePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

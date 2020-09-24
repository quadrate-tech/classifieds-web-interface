import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionAdDetailsEditComponent } from './promotion-ad-details-edit.component';

describe('PromotionAdDetailsEditComponent', () => {
  let component: PromotionAdDetailsEditComponent;
  let fixture: ComponentFixture<PromotionAdDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionAdDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionAdDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionAdDetailsComponent } from './promotion-ad-details.component';

describe('PromotionAdDetailsComponent', () => {
  let component: PromotionAdDetailsComponent;
  let fixture: ComponentFixture<PromotionAdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionAdDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionAdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

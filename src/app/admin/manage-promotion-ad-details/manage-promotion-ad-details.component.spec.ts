import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePromotionAdDetailsComponent } from './manage-promotion-ad-details.component';

describe('ManagePromotionAdDetailsComponent', () => {
  let component: ManagePromotionAdDetailsComponent;
  let fixture: ComponentFixture<ManagePromotionAdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePromotionAdDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePromotionAdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

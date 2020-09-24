import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedAdDetailComponent } from './promoted-ad-detail.component';

describe('PromotedAdDetailComponent', () => {
  let component: PromotedAdDetailComponent;
  let fixture: ComponentFixture<PromotedAdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotedAdDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotedAdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

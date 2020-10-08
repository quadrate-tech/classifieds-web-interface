import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdAdminComponent } from './list-ad-admin.component';

describe('ListAdAdminComponent', () => {
  let component: ListAdAdminComponent;
  let fixture: ComponentFixture<ListAdAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSetupComponent } from './api-setup.component';

describe('ApiSetupComponent', () => {
  let component: ApiSetupComponent;
  let fixture: ComponentFixture<ApiSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiSetupComponent]
    });
    fixture = TestBed.createComponent(ApiSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

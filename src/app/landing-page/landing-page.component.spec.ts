import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPAgeComponent } from './landing-page.component';

describe('LandingPAgeComponent', () => {
  let component: LandingPAgeComponent;
  let fixture: ComponentFixture<LandingPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

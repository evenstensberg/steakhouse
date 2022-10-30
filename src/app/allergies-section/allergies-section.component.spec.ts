import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergiesSectionComponent } from './allergies-section.component';

describe('AllergiesSectionComponent', () => {
  let component: AllergiesSectionComponent;
  let fixture: ComponentFixture<AllergiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergiesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

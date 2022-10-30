import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollUpSectionComponent } from './scroll-up-section.component';

describe('ScrollUpSectionComponent', () => {
  let component: ScrollUpSectionComponent;
  let fixture: ComponentFixture<ScrollUpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollUpSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollUpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyScrollComponent } from './sticky-scroll.component';

describe('StickyScrollComponent', () => {
  let component: StickyScrollComponent;
  let fixture: ComponentFixture<StickyScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

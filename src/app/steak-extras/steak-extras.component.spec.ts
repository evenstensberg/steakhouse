import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteakExtrasComponent } from './steak-extras.component';

describe('SteakExtrasComponent', () => {
  let component: SteakExtrasComponent;
  let fixture: ComponentFixture<SteakExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteakExtrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteakExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

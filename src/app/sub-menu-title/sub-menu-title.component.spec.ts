import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuTitleComponent } from './sub-menu-title.component';

describe('SubMenuTitleComponent', () => {
  let component: SubMenuTitleComponent;
  let fixture: ComponentFixture<SubMenuTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

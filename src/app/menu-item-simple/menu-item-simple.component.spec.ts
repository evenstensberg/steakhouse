import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemSimpleComponent } from './menu-item-simple.component';

describe('MenuItemSimpleComponent', () => {
  let component: MenuItemSimpleComponent;
  let fixture: ComponentFixture<MenuItemSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

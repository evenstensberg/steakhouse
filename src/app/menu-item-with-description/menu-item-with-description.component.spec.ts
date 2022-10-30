import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemWithDescriptionComponent } from './menu-item-with-description.component';

describe('MenuItemWithDescriptionComponent', () => {
  let component: MenuItemWithDescriptionComponent;
  let fixture: ComponentFixture<MenuItemWithDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemWithDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemWithDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleMenu()', () => {
    it('should open menu, when it is closed.', () => {
      component.menuOpened = false;
      component.toggleMenu();
      expect(component.menuOpened).toBeTruthy();
    });

    it('should close menu, when it is opened.', () => {
      component.menuOpened = true;
      component.toggleMenu();
      expect(component.menuOpened).toBeFalsy();
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRandomComponent } from './menu-random.component';

describe('MenuRandomComponent', () => {
  let component: MenuRandomComponent;
  let fixture: ComponentFixture<MenuRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

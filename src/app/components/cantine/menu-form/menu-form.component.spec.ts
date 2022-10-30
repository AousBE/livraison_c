import { ComponentFixture, TestBed } from '@angular/core/testing';

import { menuFormComponent } from './menu-form.component';

describe('menuFormComponent', () => {
  let component: menuFormComponent;
  let fixture: ComponentFixture<menuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ menuFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(menuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

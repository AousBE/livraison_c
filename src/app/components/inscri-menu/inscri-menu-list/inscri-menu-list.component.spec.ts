import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriMenuListComponent } from './inscri-menu-list.component';

describe('InscriMenuListComponent', () => {
  let component: InscriMenuListComponent;
  let fixture: ComponentFixture<InscriMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

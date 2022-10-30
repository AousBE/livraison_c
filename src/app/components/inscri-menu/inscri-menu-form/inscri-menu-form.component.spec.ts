import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriMenuFormComponent } from './inscri-menu-form.component';

describe('InscriMenuFormComponent', () => {
  let component: InscriMenuFormComponent;
  let fixture: ComponentFixture<InscriMenuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriMenuFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

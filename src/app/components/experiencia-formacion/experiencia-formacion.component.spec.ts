import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaFormacionComponent } from './experiencia-formacion.component';

describe('ExperienciaFormacionComponent', () => {
  let component: ExperienciaFormacionComponent;
  let fixture: ComponentFixture<ExperienciaFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaFormacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrgRelacionComponent } from './crear-prg-relacion.component';

describe('CrearPrgRelacionComponent', () => {
  let component: CrearPrgRelacionComponent;
  let fixture: ComponentFixture<CrearPrgRelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPrgRelacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPrgRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

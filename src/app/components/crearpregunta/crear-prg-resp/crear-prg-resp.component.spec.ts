import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrgRespComponent } from './crear-prg-resp.component';

describe('CrearPrgRespComponent', () => {
  let component: CrearPrgRespComponent;
  let fixture: ComponentFixture<CrearPrgRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPrgRespComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPrgRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

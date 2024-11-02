import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrgRelacionComponent } from './prg-relacion.component';

describe('PrgRelacionComponent', () => {
  let component: PrgRelacionComponent;
  let fixture: ComponentFixture<PrgRelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrgRelacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrgRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

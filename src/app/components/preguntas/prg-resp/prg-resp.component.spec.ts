import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrgRespComponent } from './prg-resp.component';

describe('PrgRespComponent', () => {
  let component: PrgRespComponent;
  let fixture: ComponentFixture<PrgRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrgRespComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrgRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

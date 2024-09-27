import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculadosComponent } from './matriculados.component';

describe('MatriculadosComponent', () => {
  let component: MatriculadosComponent;
  let fixture: ComponentFixture<MatriculadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

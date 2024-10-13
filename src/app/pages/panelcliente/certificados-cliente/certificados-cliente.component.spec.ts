import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosClienteComponent } from './certificados-cliente.component';

describe('CertificadosClienteComponent', () => {
  let component: CertificadosClienteComponent;
  let fixture: ComponentFixture<CertificadosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificadosClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

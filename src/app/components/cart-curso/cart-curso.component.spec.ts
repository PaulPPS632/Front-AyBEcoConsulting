import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCursoComponent } from './cart-curso.component';

describe('CartCursoComponent', () => {
  let component: CartCursoComponent;
  let fixture: ComponentFixture<CartCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

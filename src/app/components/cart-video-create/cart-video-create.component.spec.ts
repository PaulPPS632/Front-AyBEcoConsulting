import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartVideoCreateComponent } from './cart-video-create.component';

describe('CartVideoCreateComponent', () => {
  let component: CartVideoCreateComponent;
  let fixture: ComponentFixture<CartVideoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartVideoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartVideoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

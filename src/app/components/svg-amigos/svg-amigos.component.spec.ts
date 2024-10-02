import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAmigosComponent } from './svg-amigos.component';

describe('SvgAmigosComponent', () => {
  let component: SvgAmigosComponent;
  let fixture: ComponentFixture<SvgAmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgAmigosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

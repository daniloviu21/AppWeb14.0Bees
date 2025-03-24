import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasFormComponent } from './ventas-form.component';

describe('VentasFormComponent', () => {
  let component: VentasFormComponent;
  let fixture: ComponentFixture<VentasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentasFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

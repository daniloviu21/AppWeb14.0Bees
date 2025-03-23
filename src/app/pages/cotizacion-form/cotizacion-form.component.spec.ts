import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionFormComponent } from './cotizacion-form.component';

describe('CotizacionFormComponent', () => {
  let component: CotizacionFormComponent;
  let fixture: ComponentFixture<CotizacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CotizacionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

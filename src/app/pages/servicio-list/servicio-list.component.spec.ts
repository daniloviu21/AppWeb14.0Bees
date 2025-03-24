import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioListComponent } from './servicio-list.component';

describe('ServicioListComponent', () => {
  let component: ServicioListComponent;
  let fixture: ComponentFixture<ServicioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicioListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

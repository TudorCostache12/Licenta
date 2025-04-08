import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezultateEvaluareStaticaComponent } from './rezultate-evaluare-statica.component';

describe('RezultateEvaluareStaticaComponent', () => {
  let component: RezultateEvaluareStaticaComponent;
  let fixture: ComponentFixture<RezultateEvaluareStaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezultateEvaluareStaticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezultateEvaluareStaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

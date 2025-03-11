import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluareStaticaComponent } from './evaluare-statica.component';

describe('EvaluareStaticaComponent', () => {
  let component: EvaluareStaticaComponent;
  let fixture: ComponentFixture<EvaluareStaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluareStaticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluareStaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

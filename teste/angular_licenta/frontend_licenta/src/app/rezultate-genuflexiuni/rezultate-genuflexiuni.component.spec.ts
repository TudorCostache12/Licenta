import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezultateGenuflexiuniComponent } from './rezultate-genuflexiuni.component';

describe('RezultateGenuflexiuniComponent', () => {
  let component: RezultateGenuflexiuniComponent;
  let fixture: ComponentFixture<RezultateGenuflexiuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezultateGenuflexiuniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezultateGenuflexiuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

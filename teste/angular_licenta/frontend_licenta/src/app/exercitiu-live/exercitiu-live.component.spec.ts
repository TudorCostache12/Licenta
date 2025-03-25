import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercitiuLiveComponent } from './exercitiu-live.component';

describe('ExercitiuLiveComponent', () => {
  let component: ExercitiuLiveComponent;
  let fixture: ComponentFixture<ExercitiuLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercitiuLiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercitiuLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

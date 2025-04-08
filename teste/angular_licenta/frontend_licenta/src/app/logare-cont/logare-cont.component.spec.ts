import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogareContComponent } from './logare-cont.component';

describe('LogareContComponent', () => {
  let component: LogareContComponent;
  let fixture: ComponentFixture<LogareContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogareContComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogareContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreareContComponent } from './creare-cont.component';

describe('CreareContComponent', () => {
  let component: CreareContComponent;
  let fixture: ComponentFixture<CreareContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreareContComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreareContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSelectComponent } from './l-select.component';

describe('LSelectComponent', () => {
  let component: LSelectComponent;
  let fixture: ComponentFixture<LSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

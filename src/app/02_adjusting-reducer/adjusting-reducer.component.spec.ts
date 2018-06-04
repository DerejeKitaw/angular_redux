import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustingReducerComponent } from './adjusting-reducer.component';

describe('AdjustingReducerComponent', () => {
  let component: AdjustingReducerComponent;
  let fixture: ComponentFixture<AdjustingReducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustingReducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustingReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

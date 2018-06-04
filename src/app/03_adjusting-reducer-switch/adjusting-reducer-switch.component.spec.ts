import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustingReducerSwitchComponent } from './adjusting-reducer-switch.component';

describe('AdjustingReducerSwitchComponent', () => {
  let component: AdjustingReducerSwitchComponent;
  let fixture: ComponentFixture<AdjustingReducerSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustingReducerSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustingReducerSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

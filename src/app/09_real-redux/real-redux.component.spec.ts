import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealReduxComponent } from './real-redux.component';

describe('RealReduxComponent', () => {
  let component: RealReduxComponent;
  let fixture: ComponentFixture<RealReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

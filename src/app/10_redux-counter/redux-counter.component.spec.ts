import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxCounterComponent } from './redux-counter.component';

describe('ReduxCounterComponent', () => {
  let component: ReduxCounterComponent;
  let fixture: ComponentFixture<ReduxCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

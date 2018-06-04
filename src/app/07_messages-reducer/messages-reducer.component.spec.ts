import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesReducerComponent } from './messages-reducer.component';

describe('MessagesReducerComponent', () => {
  let component: MessagesReducerComponent;
  let fixture: ComponentFixture<MessagesReducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesReducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCreatorsComponent } from './action-creators.component';

describe('ActionCreatorsComponent', () => {
  let component: ActionCreatorsComponent;
  let fixture: ComponentFixture<ActionCreatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCreatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

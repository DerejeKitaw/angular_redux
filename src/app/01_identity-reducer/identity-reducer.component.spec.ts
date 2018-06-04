import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityReducerComponent } from './identity-reducer.component';

describe('IdentityReducerComponent', () => {
  let component: IdentityReducerComponent;
  let fixture: ComponentFixture<IdentityReducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityReducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

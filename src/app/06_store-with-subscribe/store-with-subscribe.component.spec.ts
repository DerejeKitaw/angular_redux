import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreWithSubscribeComponent } from './store-with-subscribe.component';

describe('StoreWithSubscribeComponent', () => {
  let component: StoreWithSubscribeComponent;
  let fixture: ComponentFixture<StoreWithSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreWithSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreWithSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

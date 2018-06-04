import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxStoreComponent } from './rx-store.component';

describe('RxStoreComponent', () => {
  let component: RxStoreComponent;
  let fixture: ComponentFixture<RxStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

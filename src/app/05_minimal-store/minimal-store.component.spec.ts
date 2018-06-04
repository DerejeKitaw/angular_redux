import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalStoreComponent } from './minimal-store.component';

describe('MinimalStoreComponent', () => {
  let component: MinimalStoreComponent;
  let fixture: ComponentFixture<MinimalStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

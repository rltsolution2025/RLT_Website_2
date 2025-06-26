import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnusrbWatcher } from './tnusrb-watcher';

describe('TnusrbWatcher', () => {
  let component: TnusrbWatcher;
  let fixture: ComponentFixture<TnusrbWatcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TnusrbWatcher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnusrbWatcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidekickSearchComponent } from './sidekick-search.component';

describe('SidekickSearchComponent', () => {
  let component: SidekickSearchComponent;
  let fixture: ComponentFixture<SidekickSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidekickSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidekickSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

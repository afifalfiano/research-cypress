import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDetailComponent } from './overview-detail.component';

describe('OverviewDetailComponent', () => {
  let component: OverviewDetailComponent;
  let fixture: ComponentFixture<OverviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

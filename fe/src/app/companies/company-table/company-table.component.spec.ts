import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTableComponent } from './company-table.component';

describe('CompanyTableComponent', () => {
  let component: CompanyTableComponent;
  let fixture: ComponentFixture<CompanyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundgettingcollegesComponent } from './fundgettingcolleges.component';

describe('FundgettingcollegesComponent', () => {
  let component: FundgettingcollegesComponent;
  let fixture: ComponentFixture<FundgettingcollegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundgettingcollegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundgettingcollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

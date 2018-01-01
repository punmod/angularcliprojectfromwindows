import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowactionplanComponent } from './showactionplan.component';

describe('ShowactionplanComponent', () => {
  let component: ShowactionplanComponent;
  let fixture: ComponentFixture<ShowactionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowactionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowactionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSpinnerComponent } from './center-spinner.component';

describe('CenterSpinnerComponent', () => {
  let component: CenterSpinnerComponent;
  let fixture: ComponentFixture<CenterSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTemplateComponent } from './results-template.component';

describe('ResultsTemplateComponent', () => {
  let component: ResultsTemplateComponent;
  let fixture: ComponentFixture<ResultsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStepComponent } from './template-step.component';

describe('TemplateStepComponent', () => {
  let component: TemplateStepComponent;
  let fixture: ComponentFixture<TemplateStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateStepComponent]
    });
    fixture = TestBed.createComponent(TemplateStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

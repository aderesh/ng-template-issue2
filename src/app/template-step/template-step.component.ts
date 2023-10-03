import { Component, ContentChild, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-step',
  templateUrl: './template-step.component.html',
  styleUrls: ['./template-step.component.scss']
})
export class TemplateStepComponent implements OnInit {
  static template: TemplateRef<any>

  @ViewChild('myTemplate', { static: true })
  template!: TemplateRef<any>

  ngOnInit(): void {
    TemplateStepComponent.template = this.template;
    console.warn("setting template to static 'template'", TemplateStepComponent.template)
  }
}

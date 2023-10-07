import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  static rootTemplate: TemplateRef<any>
  static stepTemplate1: TemplateRef<any>
  static stepTemplate2: TemplateRef<any>

  @ViewChild('rootTemplate', { static: true })
  rootTemplate!: TemplateRef<any>

  @ViewChild('stepTemplate1', { static: true })
  stepTemplate1!: TemplateRef<any>

  @ViewChild('stepTemplate2', { static: true })
  stepTemplate2!: TemplateRef<any>

  ngOnInit(): void {
    FirstComponent.rootTemplate = this.rootTemplate;
    console.warn("rootTemplate is set", FirstComponent.rootTemplate);

    FirstComponent.stepTemplate1 = this.stepTemplate1;
    console.warn("stepTemplate1 is set", FirstComponent.stepTemplate1);

    FirstComponent.stepTemplate2 = this.stepTemplate2;
    console.warn("stepTemplate2 is set", FirstComponent.stepTemplate2);
  }

  log(){
    console.warn("stepTemplate1 is set", FirstComponent.stepTemplate1);
    console.warn("stepTemplate2 is set", FirstComponent.stepTemplate2);
  }
}

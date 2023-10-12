import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { FirstComponent } from "../first/first.component";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {


  item: FormControl = new FormControl("", Validators.required);


  outsideTemplateWithRoot: TemplateRef<any> = FirstComponent.rootTemplate
  outsideTemplateWithStep1: TemplateRef<any> = FirstComponent.stepTemplate1
  outsideTemplateWithStep2: TemplateRef<any> = FirstComponent.stepTemplate2

  firstProperty = "second"


  @ViewChild('myTemplate', { static: true })
  myTemplate!: TemplateRef<any>

  template!: TemplateRef<any>;

  ngOnInit(): void {
    this.template = this.myTemplate;
  }

  count: number = 0;

  updateFirst() {
    FirstComponent.Instance.firstProperty = FirstComponent.Instance.firstProperty + this.count++;
  }
}

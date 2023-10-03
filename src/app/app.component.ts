import { Component, TemplateRef } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { TemplateStepComponent } from "./template-step/template-step.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // step 1 is in TemplateStep component

  // step2
  item: FormControl = new FormControl("", Validators.required);

  get template(): TemplateRef<any> {
    return TemplateStepComponent.template;
  }
}

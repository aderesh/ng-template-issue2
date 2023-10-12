import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [AppComponent, ThirdComponent],
  imports: [
    AppRoutingModule,
		FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

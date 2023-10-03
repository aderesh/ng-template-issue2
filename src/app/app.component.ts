import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
})
export class AppComponent {
	title = "Angular 16 Material Starter";

	constructor(private snackBar: MatSnackBar) {}

	item: FormControl<string> = new FormControl();

	handleClick() {
		this.snackBar.open("Button clicked", "ok", {
			duration: 3000,
		});
	}
}

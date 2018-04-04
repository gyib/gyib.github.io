import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

	wantHide = true;

	hide = true;

	showButton(): void {
		this.wantHide = false;
	}

	hideButton(): void {
    	this.wantHide = true;
	}

	required = new FormControl('', [Validators.required]);

	getErrorMessage() {
		return this.required.hasError('required') ? 'You must enter a value' : '';
	}

}

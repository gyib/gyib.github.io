import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../user.mod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  userName = '';
  userPassword = '';

  @Output() addUser = new EventEmitter<User>();

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

  onLogin() {
    if (this.userName === '' || this.userPassword === '') return;

    const user = new User(
      this.userName,
      this.userPassword
    );

    this.addUser.emit(user);

    this.userName = '';
    this.userPassword = '';
  }
}

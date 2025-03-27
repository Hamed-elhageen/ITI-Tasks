import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
onLoginSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Login Data:', form.value);
    }
  }
}

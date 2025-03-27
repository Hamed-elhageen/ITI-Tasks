import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      username: ['', [Validators.required, this.noWhitespaceValidator]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordValidator
      ]]
    });
  }

  // Custom validator to ensure username has no spaces
  noWhitespaceValidator(control: AbstractControl) {
    if ((control.value || '').includes(' ')) {
      return { whitespace: true };
    }
    return null;
  }

  // Custom validator for strong password
  passwordValidator(control: AbstractControl) {
    const value = control.value || '';
    const errors: any = {};

    if (!/[A-Z]/.test(value)) errors.missingUpper = true;
    if (!/[a-z]/.test(value)) errors.missingLower = true;
    if (!/\d/.test(value)) errors.missingDigit = true;
    if (!/[*@%$#]/.test(value)) errors.missingSpecial = true;

    return Object.keys(errors).length ? errors : null;
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log('Form Submitted!', this.registerForm.value);
  }
}

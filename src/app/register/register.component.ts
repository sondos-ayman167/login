// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
// })
// export class RegisterComponent {
//   registerForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.registerForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       name: ['', Validators.required],
//       username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
//       password: ['', [
//         Validators.required,
//         Validators.minLength(8),
//         Validators.pattern(/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&])/)
//       ]],
//       confirmPassword: ['', Validators.required]
//     }, { validators: this.passwordMatchValidator });
//   }

//   passwordMatchValidator(form: FormGroup) {
//     return form.get('password')!.value === form.get('confirmPassword')!.value
//       ? null : { mismatch: true };
//   }

//   register() {
//     if (this.registerForm.valid) {
//       console.log('Registration Successful', this.registerForm.value);
//     } else {
//       console.log('Form is not valid');
//     }
//   }
// }
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
register() {
throw new Error('Method not implemented.');
}
  registerForm: FormGroup;
  private fb = inject(FormBuilder); // ✅ استخدام inject() داخل Field Initializer

  constructor() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&])/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')}}
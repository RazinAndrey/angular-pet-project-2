import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  userData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6)]),
  });

  constructor() {}

  onSubmit() {
    if (this.userData.valid) {
      console.log(this.userData.value);
    } else {
      console.log('not valid');
    }
  }
}

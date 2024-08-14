import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', [Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Phone number with 10 digits
      address: ['', Validators.required],
      dob: ['', Validators.required], // Date of birth
      gender: ['', Validators.required], // Dropdown for gender
      agreeTerms: [false, Validators.requiredTrue] // Checkbox for terms agreement
    });
    
  }

  // onSubmit() {
  //   if (this.feedbackForm.valid) {
  //     // Display alert message
  //     alert('Form submitted successfully!\n' + JSON.stringify(this.feedbackForm.value, null, 2));

  //     // You can also reset the form here if needed
  //     this.feedbackForm.reset();
  //   } else {
  //     alert('Please fill out the form correctly.');
  //   }
  // }

  onSubmit() {
    if (this.feedbackForm.valid) {
      const formData = this.feedbackForm.value;
      // Redirect with form data
      this.router.navigate(['/submitted-details'], { state: { data: formData } });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}

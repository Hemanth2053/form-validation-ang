import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm!:FormGroup
  title = 'form-valid';
  submitted = false;

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit(){
    //validation

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(4)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]]
    })
  }

  onSubmit(){
    this.submitted = true

    if(this.registerForm.invalid){
      return
    }
    alert("Submitted")
  }
}

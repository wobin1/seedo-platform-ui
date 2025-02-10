import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: any;
  isSubmitted: boolean = false;
  loading: boolean = false;
  hidePassword: boolean = true;

  constructor(private auth: AuthService, private router:Router, private fb: FormBuilder){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f(){return this.loginForm.controls;}

  login(){
    this.loading = true;
    this.isSubmitted = true;
    this.loading = true;

    if(this.loginForm.invalid){
      this.loading = false;
      return;
    }

    console.log('login form data', this.loginForm.value);

    this.auth.login(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        this.loading = false;
        this.router.navigate(['/app/dashboard'])

      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }

  viewPassword(){
    this.hidePassword =!this.hidePassword;
  }

}

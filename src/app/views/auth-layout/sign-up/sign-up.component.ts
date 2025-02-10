import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  registrationForm: any;
  loading:boolean = false;
  isSubmitted:boolean = false;
  hidePassword:boolean = true;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(){
    this.registrationForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  get f(){return this.registrationForm.controls}


  register(){
    this.loading=true
    console.log('submitted', this.registrationForm.value)
    this.isSubmitted = true;
    if(this.registrationForm.invalid){
      this.loading=false;
      return;
    }

    this.auth.signup(this.registrationForm.value).subscribe(
      res=> {
        console.log(res);
        this.loading=false;
        this.router.navigate(['/auth/login']);
      },
      err=> {
        console.log(err)
        this.loading=false;
      }
    );
  }


  viewPassword(){
    this.hidePassword =!this.hidePassword;
  }

}

import { Component } from '@angular/core';
import { HttpServiceService } from '../../../shared/http-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]  // Add MessageService to component providers to use it in template
})
export class LoginComponent {
  loginForm!: any;
  isSubmitted: boolean = false;
  loading: boolean = false;
  hidePassword: boolean = true;
  toastType!:string;

  constructor(private api: HttpServiceService,
              private auth: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private messageService: MessageService){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f(){return this.loginForm.controls;}

  login(){
    this.isSubmitted = true;
    this.loading = true;

    if(this.loginForm.invalid){
      this.loading = false;
      return;
    }

    const formData = new FormData();
    formData.set('username', this.loginForm.get('email')?.value);
    formData.set('password', this.loginForm.get('password')?.value);

    this.auth.login(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        this.showSuccess('login successfull!')
        this.router.navigate(['/app/courses']);
        this.loading = false;

      },
      (err) => {
        console.error(err);
        this.showError('Invalid email or password!')
        this.loading = false;
      }
    );

  }


  showSuccess(message:string) {
    console.log(message);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message:string) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}

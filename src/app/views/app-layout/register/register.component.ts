import { Component } from '@angular/core';
import { HttpServiceService } from '../../../shared/http-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DatabaseService } from '../../../shared/database.service';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [MessageService]
})
export class RegisterComponent {
  registrationForm: any;
  loading:boolean = false;
  isSubmitted:boolean = false;
  hidePassword:boolean = true;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
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
    console.log('submitted')
    this.isSubmitted = true;
    this.loading=true
    if(this.registrationForm.invalid){
      this.loading=false;
      return;
    }

    this.auth.signup(this.registrationForm.value).subscribe(
      res=> {
        console.log(res);
        this.showSuccess('User created successfully')
        this.router.navigate(['/app/login']);
        this.loading = false;

      },
      err=> {
        this.showError('An error occurred please try again')
        console.log(err)
        this.loading = false;
      }
    );

    // setTimeout(() => {
    //   let authenticate:any = this.auth.createUser(this.registrationForm.value)
    //   if(authenticate){
    //     this.showSuccess('registration successfull!')
    //     this.loading = false;
    //     this.router.navigateByUrl('/app/login')
    //   }else{
    //     this.showError('Email already exist or there was an error please try again!')
    //     this.loading = false;
    //   }
    // }, 2000)

  }

  showSuccess(message:string) {
    console.log(message);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message:string) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}

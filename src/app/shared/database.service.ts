import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  users:any = [
    {
      "first_name": "Seedo",
      "last_name": "Seedo",
      "email": "seedo@seedo.com",
      "password": "password123"
    }
  ]

  constructor() { }

  createUser(user:any){
    if(this.checkIfEmailExists(user.email)){
      // throw new Error('Email already exists');
      return null; // or throw an error with a custom message if needed
    }else{
      this.users.push(user);
      console.log(this.users)
      return user;
    }

  }

  checkIfEmailExists(email:string){
    return this.users.some((user:any) => user.email === email);
  }

  loginUser(email:string, password:string){
    return this.users.find((user:any) => user.email === email && user.password === password);
  }



}

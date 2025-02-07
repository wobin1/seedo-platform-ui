import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {
  viewProfile:boolean = false;
  sideBar:boolean = false;

  constructor(private router: Router){}


  ngOnInit(){}

  route(page:string){
    this.router.navigate([page]);
  }

  toggleProfile(){
    this.viewProfile =!this.viewProfile;
  }

  toggleSidebar(){
    console.log('sidebar toggle')
    this.sideBar =!this.sideBar;
  }

}

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
  mobileSidebar:boolean = true;
  currentMenu:string = ''
  profilevisible:boolean = false;

  constructor(private router: Router){}


  ngOnInit(){
    let segments = this.router.url.split('/').filter(segment => segment);
    this.currentMenu = segments.length ? segments[segments.length - 1] : '';
    console.log('this.currentMenu = ', this.currentMenu);
  }

  route(page:string){
    this.router.navigate([page]);
  }

  toggleProfile(){
    this.viewProfile =!this.viewProfile;
  }

  toggleSidebar(){
    console.log('sidebar toggle')
    this.sideBar =!this.sideBar;
    this.mobileSidebar = !this.mobileSidebar;
  }

  toggleCurrentMenu(menu:string){
    this.currentMenu = menu;
    console.log('this.currentMenu = ', this.currentMenu);
  }

  toggleProfileVisible(){
    this.profilevisible = !this.profilevisible;
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../shared/http-service.service';

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
  userProfile:any;

  constructor(private router: Router,
              private api:HttpServiceService
            ){}


  ngOnInit(){
    let segments = this.router.url.split('/').filter(segment => segment);
    this.currentMenu = segments.length ? segments[segments.length - 1] : '';
    console.log('this.currentMenu = ', this.currentMenu);

    this.getUserProfile()
  }

  route(page:string){
    this.router.navigate([page]);
    this.profilevisible = false;
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

  getUserProfile(){
    this.api.get('users/profile').subscribe(
      res=>{
        this.userProfile = res
        console.log('user profile', this.userProfile);
      }, err =>{
        console.log(err)
      }
    )
  }

}

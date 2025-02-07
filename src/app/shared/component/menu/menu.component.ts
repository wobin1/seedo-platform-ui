import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  dropdown:boolean = false;
  active:string = ''

  constructor(private router: Router){}

  ngOnInit(){}

  route(page:string){
    console.log('route function clicked')
    this.router.navigateByUrl(page)
  }

  OnDropdown(){
    this.dropdown = !this.dropdown
    console.log('dropdown clicked')
  }

}

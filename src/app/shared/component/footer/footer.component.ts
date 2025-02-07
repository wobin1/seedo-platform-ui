import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(private router:Router){}

  ngOnInit(){}


  route(page:string){
    console.log('route function clicked')
    this.router.navigateByUrl(page)
  }

}

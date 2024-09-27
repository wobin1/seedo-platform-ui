import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrl: './about-hero.component.scss'
})
export class AboutHeroComponent {

  @Input() page!:string;
  @Input() pageRoute!:string;
  @Output() routClick = new EventEmitter();

  constructor(private router: Router){}

  ngOnInit(){}

  route(page:string){
    console.log('route function clicked')
    this.router.navigateByUrl(page)
  }

  onClick(){
    this.routClick.emit();
  }

}

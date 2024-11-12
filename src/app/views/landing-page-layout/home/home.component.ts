import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".fade-slide-up", {
      x: '52vw',
      duration: 3,
      scrollTrigger: {
        trigger: ".fade-slide-up",
        start: "top 80%",
        // end: "top bottom+=50%",
        // toggleActions: "restart pause reverse pause"
      }
    })
  }
}

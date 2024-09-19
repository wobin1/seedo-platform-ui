import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ourservice',
  templateUrl: './ourservice.component.html',
  styleUrl: './ourservice.component.scss'
})
export class OurserviceComponent {

  @Input() title!: string;
  @Input() body!: string;
  @Input() image!: string;
  @Input() imagePositionRight!: boolean;

}

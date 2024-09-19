import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {
  @Input() imageTitle!: string;
  @Input() imageSrc!: string;
  @Input() displayCount!: boolean;

  @Output() buttonClicked= new EventEmitter();


  onClick(){
    this.buttonClicked.emit();
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {
@Input() message!:string;
@Output() btnClick = new EventEmitter();


onClick(){
  this.btnClick.emit();
}


}

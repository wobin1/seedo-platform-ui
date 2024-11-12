import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-upload-header',
  templateUrl: './search-upload-header.component.html',
  styleUrl: './search-upload-header.component.scss'
})
export class SearchUploadHeaderComponent {
  @Output() CoursesLanguage = new EventEmitter();


  onClick(language: string): void {
    this.CoursesLanguage.emit();
  }

}

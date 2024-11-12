import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-database',
  templateUrl: './manage-database.component.html',
  styleUrl: './manage-database.component.scss'
})
export class ManageDatabaseComponent {
  thumbnail = "assets/thumbnail.jpg"
  @Output() coursesLanguage = new EventEmitter();
  courses:any = [];
  @Input() hauseCourses:any;
  @Input() YorubaCourses:any;
  @Input() IgboCourses:any;

  ngOnInit(){
    this.courses = this.hauseCourses;
  }

  onLanguageDroopdownClick(){
    this.coursesLanguage.emit();
  }

  chooseCourseLanguage(language:string){
    this.courses = language;
  }


}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() courseTitle!: string;
  @Input() isCoursesPage:boolean = false;
  @Input() totalLessons!: string;
  @Input() lessonWatched!: number;
  @Input() progressPercentage!: string;
  @Input() courseCategory!: string;
  @Output() courseDetailRoute = new EventEmitter();


  onClick(){
    this.courseDetailRoute.emit();
  }


}

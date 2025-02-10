import { Component } from '@angular/core';
import { HttpServiceService } from '../../../shared/http-service.service';
import { CourseService } from '../../../shared/services/course.service';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  providers: [MessageService]  // Add MessageService to component providers to use it in template

})
export class CourseComponent {

  open = false
  currentId=0
  addLesson:boolean = false;
  course:any;
  subMenu:string = 'overview';
  videoFile:any;


  courses = [
    { "course_title": "fadada harkar noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail6.jpg" },
    { "course_title": "Kasuwancin noma", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail2.jpg" },
    { "course_title": "Kimiyyar Shuka", views: Math.floor(Math.random() * 1000), comments: Math.floor(Math.random() * 100), "image": "assets/thumbnail3.jpg" },
  ]

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  loading: boolean = false;
  uploadLessonForm:any;


  constructor(
              private api: HttpServiceService,
              private courseService: CourseService,
              private router:Router,
              private fb:FormBuilder,
              private messageService: MessageService
            ){ }

  ngOnInit(): void {
    this.getCourses();

    this.uploadLessonForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.items = [
      { label: 'Yadda zaku shuka dankalin turawa a gida' },

  ];

  this.home = { icon: 'pi pi-home', routerLink: '/app/courses',  };
  }

  tabs = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' }
];

   get f(){return this.uploadLessonForm.controls}

   handleCreateLesson(){
    this.loading = true;

    if(this.uploadLessonForm.invalid){
      this.loading = false;
      return;
    }

    let formData = new FormData;

    formData.append('title', this.uploadLessonForm.value.title)
    formData.append('description', this.uploadLessonForm.value.description)
    formData.append('video', this.videoFile)

    this.api.post('courses/create/', formData).subscribe(
      res=>{
        this.loading = false;
        this.getCourses();
        this.uploadLessonForm.reset();
        this.addLesson = false;
        this.messageService.add({ severity:'success', summary: 'Video uploaded successfully', detail: '' });
      }, err=>{
        this.loading = false;
        this.messageService.add({ severity:'error', summary: 'Error uploading video', detail: '' });
        console.log(err)
      }
    )

   }

  route(page:string){
    this.router.navigate([page])
  }

  getCourses(){
    this.courseService.getCourses().subscribe(
      res=>{
        this.courses = res;
      }, err=>{
        console.log(err)
      }
    )
  }

  toggleSubmenu(menu:string){
    this.subMenu = menu;
  }

  showAddLessonDialog() {
    this.addLesson = true;
  }

  onImageChange(event:Event){
    let uploadedFile:any = event.target as HTMLInputElement

    // check if uploadedFile exists
    if(uploadedFile && uploadedFile.files[0]){
      this.videoFile = uploadedFile.files[0]
      console.log('File selected successfully', this.videoFile)
    }
  }

  openChapter(id:number){
    this.open = !this.open;
    this.currentId = id;
  }




}

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
  contentId: any=0
  addLesson:boolean = false;
  course:any;
  subMenu:string = 'overview';
  videoFile:any;


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
    this.getCourse();

    this.uploadLessonForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.items = [
      { label: 'Yadda zaku shuka dankalin turawa a gida' },

  ];

  this.home = { icon: 'pi pi-home', routerLink: '/app/courses',  };
  }

  tabs:any = [];

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
        // this.getCourses();
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

  getCourse(){
    this.courseService.getSingleCourse(this.getParamsId()).subscribe(
      res=>{
        this.course = res;

        for(let item of this.course.modules){
          let course:any = { title: item.title, content: item.video }
          this.tabs.push(course);
          console.log(this.tabs)
        }
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
  getParamsId(){
    const url = window.location.href;
    console.log('url', url);
    const segments = url.split('/');
    console.log('segments', segments)
    this.contentId = segments[segments.length - 1];

    return this.contentId;
  }




}

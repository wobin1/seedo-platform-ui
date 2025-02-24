import { Component } from '@angular/core';
import { HttpServiceService } from '../../../shared/http-service.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  post:any;
  postTitle:any;
  loading:boolean = false;
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(
    private api:HttpServiceService
  ){}

  ngOnInit(){
    this.items = [
      { label: 'Create Post' },

  ];

  this.home = { icon: 'pi pi-home', routerLink: '/admin/blog',  };
  }

  createPost(){
    this.loading = true;
    this.api.post('blog', {"title": this.postTitle, "content": this.post}).subscribe(
      res=>{
        console.log(res);
        this.loading = false;
      }, err=>{
        console.log(err);
        this.loading = false;
      }
    )
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../http-service.service';
import { StorageService } from '../../storage.service';
import { CachedDbService } from '../../services/cached-db.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() currentPage!:string;
  @Input() filter!:any;
  @Output() fetchData = new EventEmitter();
  blogContent:any =[];
  loading:boolean = false;
  mainData:any;


  constructor(private router:Router,
              private api:HttpServiceService,
              private cached:CachedDbService,
              private storage:StorageService){}

  ngOnInit(){

    console.log(this.filter);
    this.cached.getCachedNews('blogPost').subscribe(
      res=>{this.blogContent = res; console.log(`${this.filter}`, this.blogContent)}
    )
    this.getNews()

  }

  route(page:string){
    this.router.navigate([page])
  }

  getNews(){
    this.loading = true;
    this.api.get(`blog/`).subscribe(
      res=>{
        let response:any=res
        this.blogContent = response
        console.log(this.blogContent)
        this.loading = false;
      }, err=>{
        console.log(err);
        this.loading = false;
      }
    )
  }



}

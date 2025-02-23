import { Component } from '@angular/core';
import { HttpServiceService } from '../../../../shared/http-service.service';
import { Router } from '@angular/router';
import { CachedDbService } from '../../../../shared/services/cached-db.service';
import { StorageService } from '../../../../shared/storage.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {

  contentId:any;
  content?:any;
  loading:boolean = false;
  relatedNews:any;
  localContent:any;
  blogContent:any;

  constructor(private api:HttpServiceService,
              private router:Router,
              private cached:CachedDbService,
              private storage:StorageService,){}

  ngOnInit(){
    let currenDb:any = this.storage.getdata('currentDb')
    console.log('current db', currenDb);
    this.cached.getCachedNews(currenDb).subscribe(
      res=>{
        this.localContent = res;
        console.log(`local content`, res)
        this.content = this.localContent.find((item:any) => item.id == this.getParamsId());
        console.log('content', this.content)

      }
    )

    this.getContent(this.getParamsId())
    this.getBlogContent()

  }

  shareContent() {
    if (navigator.share) {
      navigator.share({
        title: 'Share news content!',
        text: 'I found this page interesting, have a look:',
        url: window.location.href, // Share the current URL
      })
      .then(() => console.log('Content shared successfully'))
      .catch((error) => console.error('Error sharing content:', error));
    } else {
      alert('Web Share API is not supported on this browser.');
    }
  }

  route(page:string){
    this.router.navigate([page]);
  }

  getParamsId(){
    const url = window.location.href;
    console.log('url', url);
    const segments = url.split('/');
    console.log('segments', segments)
    this.contentId = segments[segments.length - 1];

    return this.contentId;
  }

  getContent(id:any){
    this.loading = true;
    this.api.get('blog/'+id).subscribe(
      res=>{
        let response:any = res;
        this.content = response;
        console.log('content', this.content);
        this.loading = false;
      }, err=>{
        console.log(err);
        this.loading = false;
      }
    )
  }

  getBlogContent(){
    this.loading = true;
    this.api.get(`blog/`).subscribe(
      res=>{
        let response:any=res
        this.blogContent = response.slice(0, 4)
        console.log(this.blogContent)
        this.loading = false;
      }, err=>{
        console.log(err);
        this.loading = false;
      }
    )
  }



  goBack(){
    window.history.back();
  }

}

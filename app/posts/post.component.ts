import {Component} from '@angular/core';
import {PostListComponent} from "./post-list.component";
import {PostDetailComponent} from "./post-detail.component";
import {Post} from './post';

@Component({
    selector: 'post',
    template: `
        <h2>Post</h2>
        <div class="container">
           <div class="col-lg-6">
               <post-list (onSelected)="select($event)"></post-list>
           </div>
           <div class="col-lg-6">
               <post-detail *ngIf="selectedPost" [post]="selectedPost"></post-detail>
           </div>
        </div>

    `,
    directives : [PostListComponent, PostDetailComponent]
})
export class PostComponent {

  selectedPost : Post;

  select(_post : Post) {
    this.selectedPost = _post;
  }
}

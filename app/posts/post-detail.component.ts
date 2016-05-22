import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {Post} from './post';
import {PostService} from './post.service';
import {Comment} from './comment';
import {MyLoadComponment} from '../shared/my-loader.component';

@Component({
    selector : 'post-detail',
    template: `
<div class="panel panel-default" *ngIf="post">
  <div class="panel-heading">{{post.title}}</div>
  <div class="panel-body">
    {{post.body}}
  </div>
</div>
<h4>Comments</h4>

<my-loader [show]="isLoading"></my-loader>
<div *ngIf="!isLoading">
    <div class="panel panel-default" *ngFor = "let comment of comments">
        <div class="panel-heading">{{comment.name}}</div>
        <div class="panel-body">{{comment.body}}</div>
    </div>
</div>`,
directives: [MyLoadComponment],
    providers : [PostService]
})
export class PostDetailComponent implements OnChanges {
    @Input() post : Post;
    comments : Comment[];
    isLoading = true;

    constructor(private _postService : PostService){}

  ngOnChanges(changes : {[propkey:string] : SimpleChange}) {
      this.comments = [];
      this.isLoading=true;
      let changedProp = changes['post']; //only focus on the change of post

      this._postService.getCommentsForPost(changedProp.currentValue.id).subscribe(
          data => {this.comments = data},
          null,
          () => {this.isLoading = false;}
      );
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Post} from './post';
import {RouteParams} from '@angular/router-deprecated';
import {PostService} from './post.service';

@Component({
    selector : 'post-detail',
    template: `
<div class="panel panel-default">
  <div class="panel-heading">{{post.title}}</div>
  <div class="panel-body">
    {{post.body}}
  </div>
</div>
    `,
  providers : [PostService]
})
export class PostDetailComponent implements OnInit {

  constructor(private _routeParams : RouteParams,
  private _postService : PostService){}

  post : Post = new Post();

  ngOnInit() {
    console.log('================PostDetailComponent has been init==========');
    console.log(this._routeParams.get('id'));
    this._postService.getPost(this._routeParams.get('id')).subscribe(
      data => { this.post = data },
      null,
      () => { console.log('finished'); }
    );
  }

}

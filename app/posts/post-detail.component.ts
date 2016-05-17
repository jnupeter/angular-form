import {Component, Input, OnInit} from '@angular/core';
import {Post} from './post';

@Component({
    selector : 'post-detail',
    template: `
<div class="panel panel-default" *ngIf="show()">
  <div class="panel-heading">{{post.title}}</div>
  <div class="panel-body">
    {{post.body}}
  </div>
</div>
    `
})
export class PostDetailComponent implements OnInit {

  show() : boolean {
    return this.post && this.post.id;
  }

  @Input() post : Post;

  ngOnInit() {
    console.log('================PostDetailComponent has been init==========');
  }

}

import {Component} from '@angular/core';
import {PostListComponent} from "./post-list.component";
import {PostDetailComponent} from './post-detail.component';
import {Post} from './post';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'post',
    template: `
        <h2>Post<h2>
        <div class="container">
           <div class="col-lg-6">
               <post-list (onSelected)="select($event)"></post-list>
           </div>
           <div class="col-lg-6">
                  <router-outlet></router-outlet>
           </div>
        </div>

    `,
    directives : [PostListComponent, ROUTER_DIRECTIVES]
})
export class PostComponent {

  constructor(private router : Router) {}

  select(post : Post) {
    console.log('==================' + post.id);
    this.router.navigate(['PostDetail', {id : post.id}]);
  }
}

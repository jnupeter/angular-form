import {Component} from '@angular/core';
import {PostListComponent} from "./post-list.component";
import {PostDetailComponent} from "./post-detail.component";

@Component({
    selector: 'post',
    template: `
        <h2>Post<h2>
        <div class="container">
           <div class="col-lg-6">
               <post-list></post-list>
           </div>
           <div class="col-lg-6">
               <post-detail></post-detail>
           </div>
        </div>

    `,
    directives : [PostListComponent, PostDetailComponent]
})
export class PostComponent {

}
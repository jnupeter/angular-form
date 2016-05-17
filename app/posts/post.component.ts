import {Component} from '@angular/core';
import {PostListComponent} from "./post-list.component";

@Component({
    selector: 'post',
    template: `
        <h2>Post<h2>
        <post-list></post-list>
    `,
    directives : [PostListComponent]
})
export class PostComponent {

}
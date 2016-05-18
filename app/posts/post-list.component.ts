import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Post} from './post';
import {PostService} from './post.service';


@Component({
    selector : 'post-list',
    template: `
        <div *ngIf="isLoading"> Loading data ....</div>

            <ul class="list-group" *ngIf="!isLoading">
                <li *ngFor="let post of posts" (click)="emitPost(post)" class="list-group-item">{{post.title}}</li>
            </ul>

    `,
    providers: [PostService]
})
export class PostListComponent implements OnInit {

    isLoading = true;
    constructor(private _postService : PostService) {

    }

    @Output() onSelected = new EventEmitter<Post>();
    
    posts : Post[] = [];

    ngOnInit() {
        this._postService.getAllPost().subscribe(
            data => { this.posts = data;},
            null,
            () => {this.isLoading = false;}
        );
    }
  
    emitPost(_post : Post) {
      this.onSelected.emit(_post);
    }
  
}

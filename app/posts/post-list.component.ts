import {Component, OnInit} from '@angular/core';
import {Post} from './post';
import {PostService} from './post.service';

@Component({
    selector : 'post-list',
    template: `
        <div *ngIf="isLoading"> Loading data ....</div>
        <div *ngIf="!isLoading">
            <ul class="list-group">
                <li *ngFor="let post of posts" class="list-group-item">{{post.title}}</li>
            </ul>
        </div>
    `,
    providers: [PostService]
})
export class PostListComponent implements OnInit {

    isLoading = true;
    constructor(private _postService : PostService) {

    }

    posts : Post[] = [];

    ngOnInit() {
        this._postService.getAllPost().subscribe(
            data => { this.posts = data;},
            null,
            () => {this.isLoading = false;}
        );
    }
}
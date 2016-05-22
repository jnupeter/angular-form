import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Post} from './post';
import {PostService} from './post.service';
import {UserService} from '../users/user.service';
import {MyLoadComponment} from '../shared/my-loader.component';
import {MyPaginationComponent} from '../shared/my-pagination.component';

@Component({
    selector : 'post-list',
    template: `
        <select class="form-control" #u (change)="loadPostsForUser({'userId' : u.value})">
           <option value=''>Select a user...</option>
           <option *ngFor="let u of users" value="{{u.id}}">{{u.username}}</option>
        </select>
        <my-loader [show]="isLoading"></my-loader>

        <my-pagination [items]="posts" (page-changed)="onPageChanged($event)" [pagesize]="pageSize"></my-pagination>

            <ul class="list-group" *ngIf="!isLoading">
                <li *ngFor="let post of pagedPosts" (click)="emitPost(post)" class="list-group-item">{{post.title}}</li>
            </ul>

    `,
    styles: [`
       li:hover {
         background-color : gray;
       }
      `],
    directives: [MyLoadComponment, MyPaginationComponent],
    providers: [PostService, UserService]
})
export class PostListComponent implements OnInit {

    constructor(private _postService : PostService,
                private _userService : UserService) {

    }
    isLoading : boolean;
    users : any[] = [];
    posts : Post[] = [];
    pagedPosts : Post[] = [];
    pageSize : number = 10;

    @Output() onSelected = new EventEmitter<Post>();

    ngOnInit() {
        this._loadPosts();
        this._loadUsers();
    }

    private _loadPosts(filter? : any) {
      this.isLoading = true;
      this._postService.getAllPost(filter).subscribe(
          data => { this.posts = data;
                    this.pagedPosts = _.take(this.posts, this.pageSize);
          },
          null,
          () => {this.isLoading = false;}
      );
    }

    private _loadUsers() {
      this._userService.getAllUsers().subscribe(
        res => {this.users = res;},
        null,
        () => {console.log('users loaded');}
      );
    }

    emitPost(_post : Post) {
      this.onSelected.emit(_post);
    }

    loadPostsForUser(filter?: any) {
      this.isLoading = true;
      this.posts = [];
      this._loadPosts(filter);
    }

    onPageChanged(cp : number) {
      var startIndex = (cp - 1) * this.pageSize;
      this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    }
}

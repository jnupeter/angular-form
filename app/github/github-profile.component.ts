import {Component, OnInit} from '@angular/core';
import {GithubService} from './github.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
    selector : 'github-profile',
    template:`
        <div *ngIf="isLoading">
            Getting data ........
        </div>
        <div *ngIf="!isLoading">
        <h2>@{{user.login}}</h2>
        <img class="avatar" [src]="user.avatar_url" />
        <h3>Followers</h3>
        <div *ngFor="let follower of followers">{{follower.login}}</div>
        </div>
    `,
    styles: [
        `
        .avatar {
           width: 100;
           height: 100;
           border-radious: 100%
        }
        `
    ],
    providers : [GithubService]
})
export class GithubProfileComponent implements OnInit {
    isLoading = true;
    private username = 'octocat';
    user = {};
    followers : any[] = [];
    constructor(private _githubService: GithubService) {

    }

    ngOnInit() {
        Observable.forkJoin(
            this._githubService.getUser(this.username),
            this._githubService.getFollowers(this.username)
        ).subscribe(
            data => {this.user = data[0]; this.followers = data[1];},
            null,
            () => {this.isLoading = false;}
        );
    }

}
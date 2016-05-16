import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    constructor(private _http : Http) {}
    private baseUrl = "https://api.github.com/users/";

    getUser(username : string) {
         return this._http.get(this.baseUrl + username)
             .map(res => res.json());
    }

    getFollowers(username: string) {
        return this._http.get(this.baseUrl + username +"/followers")
        .map(res => res.json());
    }
}
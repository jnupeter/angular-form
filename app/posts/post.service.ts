import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import {Comment} from './comment';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    private _url = "http://localhost:8001/posts";

    constructor(private _http : Http) {

    }

    getAllPost(filter? : any) : Observable<Post[]> {
        var url = this._url;
        if (filter && filter.userId) {
            url = url + '?userId=' + filter.userId;
        }

        return this._http.get(url)
              .map(res => res.json());
    }

    getPost(post : Post) : Observable<Post> {
         return this._http.get(this._url + '/' + post.id)
           .map(res => res.json());
    }

    getCommentsForPost(postid : number) : Observable<Comment[]> {
        return this._http.get(this._url + '/' + postid + '/comments')
          .map(res => res.json());
    }

    getPostForUser(userid : number) : Observable<Post[]> {
      return this._http.get(this._url + '?userId=' + userid)
             .map(res => res.json());
    }
}

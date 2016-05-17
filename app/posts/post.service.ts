import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http : Http) {

    }

    getAllPost() : Observable<Post[]> {
        return this._http.get(this._url)
        .map(res => res.json());
    }
  
    getPost(post : Post) : Observable<Post> {
         return this._http.get(this._url + '/' + post.id)
           .map(res => res.json());
    }
}

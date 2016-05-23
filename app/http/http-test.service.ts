import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Item} from "./Item.model";

@Injectable()
export class HttpTestService {

    constructor(private _http : Http){};

    getData() : Observable<Item[]> {
        return this._http.get('http://localhost:8001/posts')
                   .map(res => res.json());
    }

    private extraData(res : Response) {
        return res.json();
    }
}

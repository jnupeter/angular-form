import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpTestService {

    constructor(private _http : Http){};

    getData() {
        return this._http.get('http://jsonplaceholder.typicode.com/posts')
                   .map(res => res.json());
    }

    private extraData(res : Response) {
        return res.json();
    }
}
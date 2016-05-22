import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

constructor(private _http : Http) {

}

    getAllUsers() {
      return this._http.get("http://jsonplaceholder.typicode.com/users")
             .map(res => res.json());
    }
}

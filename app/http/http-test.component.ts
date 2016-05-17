import {Component} from '@angular/core';
import {HttpTestService} from "./http-test.service";
import {Item} from "./Item.model";

@Component({
    selector : 'http-test',
    template :`
      
      <button class="btn btn-primary" (click)="getDataBackFromServer()">Http Get</button>

      <ul class="list-group">
            <li *ngFor="let item of backData" class="list-group-item">{{item.title}}</li>
      </ul>
    `,
    providers: [HttpTestService]
})
export class HttpTestComponent {

    constructor(private httpTestService : HttpTestService) {
    }

    backData : Item[];

    getDataBackFromServer() {
        this.httpTestService.getData().subscribe(
            data => this.backData = data,
            error => console.log(error),
            () => console.log("finished")
        );
    }
}

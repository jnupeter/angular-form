import {Component} from '@angular/core';
import {HttpTestService} from "./http-test.service";

@Component({
    selector : 'http-test',
    template :`
      <button class="btn btn-primary" (click)="getDataBackFromServer()">Http Get</button>
      What is back? {{getBackData}}
    `,
    providers: [HttpTestService]
})
export class HttpTestComponent {

    constructor(private httpTestService : HttpTestService) {
    }

    getBackData : string;

    getDataBackFromServer() {
        this.httpTestService.getData().subscribe(
            data => this.getBackData = JSON.stringify(data),
            error => console.log(error),
            () => console.log("finished")
        );
    }
}
import {Component} from '@angular/core';
import {HttpTestService} from "./http-test.service";
import {Item} from "./Item.model";

@Component({
    selector : 'http-test',
    template :`
      
      <button class="btn btn-primary" (click)="getDataBackFromServer()">Http Get</button>
      What is back? 
      <table class="table table-striped">
      <thead><tr><td>title</td><td>content</td></tr></thead>
         <tbody>
         <tr *ngFor="let item of backData">
           <td>{{item.title}}</td><td>{{item.body}}</td>
</tr>
</tbody>
</table>
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

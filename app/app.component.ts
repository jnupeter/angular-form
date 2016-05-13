import {Component} from '@angular/core';

import {HttpTestComponent} from './http/http-test.component';

@Component({
    selector: 'my-app',
    template: `
       <div class="container">
           <http-test></http-test>
       </div>
    `,
    directives: [HttpTestComponent]
})
export class AppComponent { }

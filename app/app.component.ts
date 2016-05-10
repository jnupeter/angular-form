import {Component} from '@angular/core';

import {HeroFormComponent} from './hero-form.component';

@Component({
    selector: 'my-app',
    template: `
       <div class="container">
           <hero-form></hero-form>
       </div>
    `,
    directives: [HeroFormComponent]
})
export class AppComponent { }

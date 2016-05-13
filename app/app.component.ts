import {Component} from '@angular/core';

import {HttpTestComponent} from './http/http-test.component';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HeroFormComponent} from "./hero-form.component";
import {OtherComponent} from "./other.component";


@Component({
    selector: 'my-app',
    template: `
       <h1>Component Router (Deprecated)</h1>
       <nav>
       <a [routerLink]="['Forms']">Forms</a>
       <a [routerLink]="['HttpTest']">Http Test</a>
       <a [routerLink]="['Others']" >Others</a>
</nav>
       <div class="container">
           <router-outlet></router-outlet>
       </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/forms', name: 'Forms', component: HeroFormComponent},
  {path: '/httptest', name: 'HttpTest', component: HttpTestComponent},
  {path: '/other', name: 'Others', component: OtherComponent, useAsDefault: true}
])
export class AppComponent { }

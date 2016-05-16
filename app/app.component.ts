import {Component} from '@angular/core';

import {HttpTestComponent} from './http/http-test.component';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HeroFormComponent} from "./hero-form.component";
import {OtherComponent} from "./other.component";
import {Title} from '@angular/platform-browser';
import {GithubProfileComponent} from "./github/github-profile.component";

@Component({
    selector: 'my-app',
    template: `
       <h1>Component Router (Deprecated)</h1>
       <nav>
       <a [routerLink]="['Forms']" (click)="setTitle('Forms')">Forms</a>
       <a [routerLink]="['HttpTest']" (click)="setTitle('HttpTest')">Http Test</a>
       <a [routerLink]="['Others']" (click)="setTitle('Others')">Others</a>
       <a [routerLink]="['Github']" (click)="setTitle('Github')">Github</a>
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
  {path: '/other', name: 'Others', component: OtherComponent, useAsDefault: true},
    {path: '/github', name: 'Github', component: GithubProfileComponent}
])
export class AppComponent {
  constructor(private titleService: Title) {

  }

  setTitle(title : string) {
    this.titleService.setTitle(title);
  }
}

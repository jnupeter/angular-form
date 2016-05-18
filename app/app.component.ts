import {Component} from '@angular/core';

import {HttpTestComponent} from './http/http-test.component';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HeroFormComponent} from "./hero-form.component";
import {OtherComponent} from "./other.component";
import {Title} from '@angular/platform-browser';
import {GithubProfileComponent} from "./github/github-profile.component";
import {PostComponent} from "./posts/post.component";

@Component({
    selector: 'my-app',
    template: `
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">ngTestProject</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['Forms']" (click)="setTitle('Forms')">Forms</a></li>
        <li><a [routerLink]="['HttpTest']" (click)="setTitle('HttpTest')">Http Test</a></li>
       <li><a [routerLink]="['Others']" (click)="setTitle('Others')">Others</a></li>
       <li><a [routerLink]="['Github']" (click)="setTitle('Github')">Github</a></li>
       <li><a [routerLink]="['Posts']">Posts</a></li>

      </ul>

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
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
    {path: '/github', name: 'Github', component: GithubProfileComponent},
    {path: '/posts', name: 'Posts', component: PostComponent}
])
export class AppComponent {
  constructor(private titleService: Title) {

  }

  setTitle(title : string) {
    this.titleService.setTitle(title);
  }
}

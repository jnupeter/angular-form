import {Component} from '@angular/core';

import {HttpTestComponent} from './http/http-test.component';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HeroFormComponent} from "./hero-form.component";
import {OtherComponent} from "./other.component";
import {Title} from '@angular/platform-browser';
import {GithubProfileComponent} from "./github/github-profile.component";
import {PostComponent} from "./posts/post.component";
import {UserComponent} from './users/user.component';
import {HomeComponent} from './home.component';

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
        <a class="navbar-brand" [routerLink]="['Home']" (click)="setTitle('Home')">ngTestProject</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li [class.active]="isCurrentActive(['Forms'])">
             <a [routerLink]="['Forms']" (click)="setTitle('Forms')">Forms</a>
          </li>
          <li [class.active]="isCurrentActive(['HttpTest'])">
            <a [routerLink]="['HttpTest']" (click)="setTitle('HttpTest')">Http Test</a>
          </li>
         <li [class.active]="isCurrentActive(['Others'])">
            <a [routerLink]="['Others']" (click)="setTitle('Others')">Others</a>
         </li>
         <li [class.active]="isCurrentActive(['Github'])">
            <a [routerLink]="['Github']" (click)="setTitle('Github')">Github</a>
         </li>
         <li [class.active]="isCurrentActive(['Posts'])">
            <a [routerLink]="['Posts']" (click)="setTitle('Posts')">Posts</a>
        </li>
         <li [class.active]="isCurrentActive(['Users'])">
            <a [routerLink]="['Users']" (click)="setTitle('Users')">Users</a>
         </li>
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
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/forms', name: 'Forms', component: HeroFormComponent},
  {path: '/httptest', name: 'HttpTest', component: HttpTestComponent},
  {path: '/other', name: 'Others', component: OtherComponent},
    {path: '/github', name: 'Github', component: GithubProfileComponent},
    {path: '/posts', name: 'Posts', component: PostComponent},
    {path: '/users/...', name: 'Users', component: UserComponent}
])
export class AppComponent {
  constructor(private titleService: Title,
  private _router : Router) {

  }

  setTitle(title : string) {
    this.titleService.setTitle(title);
  }

  isCurrentActive(route : any) {
    var instruction = this._router.generate(route);
    return this._router.isRouteActive(instruction);
  }
}

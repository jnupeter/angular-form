import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector : "my-navbar",
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
  `,
  directives:[ROUTER_DIRECTIVES]
})
export class NavbarComponent {

}

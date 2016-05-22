import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {UserListComponent} from './user-list.component';
import {UserFormComponent} from './user-form.component';

@Component({
selector: 'user-center',
template: `
   <h2>user center</h2>
   <router-outlet></router-outlet>
`,
directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name: 'UsersList', component: UserListComponent, useAsDefault: true},
  {path: '/new', name: 'NewUser', component: UserFormComponent}
])
export class UserComponent {

}

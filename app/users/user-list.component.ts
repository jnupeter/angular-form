import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {MyLoadComponment} from '../shared/my-loader.component';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector : 'user-list',
  template:`
      <h2>Users</h2>
      <p>
        <a class="btn btn-primary" [routerLink]="['NewUser']">Add User</a>
      </p>
      <my-loader [show]="isLoading"></my-loader>
      <table class="table table-bordered" *ngIf="!isLoading">
         <thead><tr><td>Name</td><td>Email</td><td>Edit</td><td>Delete</td></tr></thead>
         <tbody>
             <tr *ngFor="let user of users">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td><span class="glyphicon glyphicon-edit"></span></td>
                <td><span class="glyphicon glyphicon-remove"></span></td>
             </tr>
         </tbody>
      </table>
  `,
  directives: [MyLoadComponment, ROUTER_DIRECTIVES],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  isLoading : boolean = true;
  users : any[] = [];

  constructor(private _userService : UserService) {}

  ngOnInit() {
    this._userService.getAllUsers().subscribe(
      data => {this.users = data;},
      null,
      () => {this.isLoading = false;}
    );
  }
}

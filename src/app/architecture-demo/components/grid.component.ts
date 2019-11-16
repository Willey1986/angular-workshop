import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-grid',
  template: `
    <button (click)="addUser.emit()">Add User</button>
    <table>
      <tr>
        <th>id</th>
        <th>username</th>
        <th>email</th>
        <th>firstname</th>
        <th>lastname</th>
      </tr>
      <tr *ngFor="let user of users">
        <td>{{user.id}}</td>
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.firstname}}</td>
        <td>{{user.lastname}}</td>
      </tr>
    </table>
  `,
  styles: []
})
export class GridComponent {

  @Input() users: User[];
  @Output() addUser = new EventEmitter();

}

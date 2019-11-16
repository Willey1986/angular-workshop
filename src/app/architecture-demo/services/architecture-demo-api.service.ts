import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArchitectureDemoApiService {

  users: User[] = [
    {id: 1, username: 'plustig', email: 'peter.lustig@mail.de', firstname: 'Peter', lastname: 'Lustig'},
    {id: 2, username: 'mmustermann', email: 'max.mustermann@mail.de', firstname: 'Max', lastname: 'Mustermann'},
    {id: 3, username: 'sclaus', email: 'santa.claus@mail.de', firstname: 'Santa', lastname: 'Claus'}
  ];

  getUsers() {
    return of(this.users).pipe(delay(200));
  }

  addUser() {
    const newId = this.users.length + 1;
    const newUserName = `user${newId}`;
    const newUser = new User(
      newId,
      newUserName,
      `${newUserName}@mail.de`,
      `${newUserName}`,
      `${newUserName}`
    );
    this.users = [...this.users, newUser];
    return of(undefined).pipe(delay(200));
  }
}

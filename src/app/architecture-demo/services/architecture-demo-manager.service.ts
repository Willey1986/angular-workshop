import { Injectable } from '@angular/core';
import { ArchitectureDemoApiService } from './architecture-demo-api.service';
import { Subject, Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { User } from '../model/user';
import { switchMap, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArchitectureDemoManagerService {

  private refreshTrigger$ = new BehaviorSubject(undefined);
  private allUsers$ = this.refreshTrigger$.pipe(
    switchMap(() => this.architectureDemoApi.getUsers())
  );

  private searchTerm$ = new BehaviorSubject<string>('');
  private filteredUsers$ = combineLatest([this.allUsers$, this.searchTerm$]).pipe(
    map(([users, searchTerm]) => this.filterUsers(users, searchTerm))
  );

  get users$() {
    return this.filteredUsers$;
  }

  constructor(private architectureDemoApi: ArchitectureDemoApiService) { }

  loadUsers() {
    this.refresh();
  }

  addUser() {
    this.architectureDemoApi.addUser();
    this.refresh();
  }

  applyFilter(searchTerm: string) {
    this.searchTerm$.next(searchTerm);
  }

  private refresh() {
    this.refreshTrigger$.next(undefined);
  }

  private filterUsers(users: User[], searchTerm: string) {
    return users.filter(user => {
      return user.firstname.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        || user.lastname.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        || user.username.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        || user.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
  }

}

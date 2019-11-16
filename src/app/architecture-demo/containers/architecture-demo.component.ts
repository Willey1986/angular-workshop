import { Component, OnInit } from '@angular/core';
import { ArchitectureDemoManagerService } from '../services/architecture-demo-manager.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Component({
  selector: 'app-architecture-demo',
  template: `
    <app-filterbar [(searchTerm)]="searchTerm" (searchTermChange)="filterBySearchTerm()"></app-filterbar>
    <h3>Registered Users: {{(users$ | async) | count}}</h3>
    <app-grid (addUser)="addUser()" [users]="users$ | async"></app-grid>
  `,
  styles: [':host {display: flex; flex-direction: column;}']
})
export class ArchitectureDemoComponent {

  searchTerm = '';
  users$ = this.architectureDemoManager.users$;

  constructor(private architectureDemoManager: ArchitectureDemoManagerService) { }

  addUser() {
    this.architectureDemoManager.addUser();
  }

  filterBySearchTerm() {
    this.architectureDemoManager.applyFilter(this.searchTerm);
  }

}

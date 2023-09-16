import { Component, OnInit } from '@angular/core';
import { IUser } from './components/services/users.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  static favoriteUsers: IUser[] = [];
  constructor() {}

  ngOnInit(): void {
    this.checkSavedUsers();
  }

  checkSavedUsers() {
    if (localStorage.getItem('favoriteUsers') !== null) {
      AppComponent.favoriteUsers = JSON.parse(
        localStorage.getItem('favoriteUsers')!
      );
    }
  }
}

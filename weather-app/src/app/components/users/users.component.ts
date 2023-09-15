import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersDataService } from '../services/get-users-data.service';
import { IUser, IUserWeather } from '../services/users.interfaces';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];

  constructor(
    private router: Router,
    private usersService: GetUsersDataService
  ) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService.getUsersData().subscribe((data) => {
      this.users = Object.values(data)[0];
    });
  }

  async showUsersInfo() {
    await this.router.navigate(['/users-info']);
  }

  saveUser(user: IUser) {
    AppComponent.favoriteUsers.push(user);
    localStorage.setItem(
      'favoriteUsers',
      JSON.stringify(AppComponent.favoriteUsers)
    );
  }
}

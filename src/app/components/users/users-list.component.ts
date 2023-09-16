import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersDataService } from '../services/get-users-data.service';
import { IUser } from '../services/users.interfaces';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  usersWeatherData: any[] = [];

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
      this.fetchUsersWeather();
    });
  }

  async showUsersInfo() {
    await this.router.navigate(['/users-saved-info']);
  }

  fetchUsersWeather() {
    if (this.users.length) {
      for (const user of this.users) {
        this.usersService
          .getUsersWeather(
            user.location.coordinates.latitude,
            user.location.coordinates.longitude
          )
          .subscribe((data) => {
            this.usersWeatherData.push(data);
          });
      }
    }
  }

  saveUser(user: IUser) {
    AppComponent.favoriteUsers.push(user);
    localStorage.setItem(
      'favoriteUsers',
      JSON.stringify(AppComponent.favoriteUsers)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-saved-info.component.html',
  styleUrls: ['./users-saved-info.component.scss'],
})
export class UsersInfoComponent implements OnInit {
  savedUsers = AppComponent.favoriteUsers;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if (localStorage.getItem('favoriteUsers') !== null) {
      AppComponent.favoriteUsers = JSON.parse(
        localStorage.getItem('favoriteUsers')!
      );
    }
  }

  async showUsersList() {
    await this.router.navigate(['/users-list']);
  }
}

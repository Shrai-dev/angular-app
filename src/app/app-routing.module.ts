import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users-list.component';
import { UsersInfoComponent } from './components/users-info/users-saved-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'users-list', pathMatch: 'full' },
  { path: 'users-list', component: UsersComponent },
  { path: 'users-saved-info', component: UsersInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

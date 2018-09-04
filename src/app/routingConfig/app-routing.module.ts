import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from '../preLogin/login/login.component';

import { homeComponent } from '../postLogin/home/home.component';
import { dashboardComponent } from '../postLogin/dashboard/dashboard.component';
import { usersComponent } from '../postLogin/users/users.component';
import { reportComponent } from '../postLogin/report/report.component';
import { aboutComponent } from '../postLogin/about/about.component';

const routes: Routes = [
  { path: 'login', component: loginComponent },
  {
    path: 'home', component: homeComponent,
    children: [
      { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: dashboardComponent },
      { path: 'users', component: usersComponent },
      { path: 'report', component: reportComponent },
      { path: 'about', component: aboutComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

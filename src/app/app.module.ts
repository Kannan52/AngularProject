import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routingConfig/app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule, 
  MatCheckboxModule, 
  MatButtonModule,
  MatCardModule

} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

import { loginComponent } from './preLogin/login/login.component';
import { homeComponent } from './postLogin/home/home.component';
import { dashboardComponent } from './postLogin/dashboard/dashboard.component';
import { usersComponent } from './postLogin/users/users.component';
import { reportComponent } from './postLogin/report/report.component';
import { aboutComponent } from './postLogin/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    homeComponent,
    dashboardComponent,
    usersComponent,
    reportComponent,
    aboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule, 
    MatCheckboxModule, 
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './features/homepage/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
// import { SearchComponent}
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { WelcomeComponent } from '.homepage/welcome/Welcome';
import { WelcomeComponent } from './features/homepage/welcome/welcome.component'; 
import { HomepageComponent } from './features/homepage/homepage.component';
import { SearchComponent } from './features/homepage/search/search.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { TitleBarComponent } from './shared/components/title-bar/title-bar.component';
import { CompletedComponent } from './features/completed/completed.component';
import { SettingsComponent } from './features/settings/settings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatCalendar } from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    // SearchComponent,
    WelcomeComponent,
    HomepageComponent,
    SearchComponent,
    TasksComponent,
    TitleBarComponent,
    CompletedComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    NgxMaterialTimepickerModule.setLocale('en-US'),
    MatDialog,
    // MatCalendar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

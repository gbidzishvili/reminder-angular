import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './homepage/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
// import { SearchComponent}
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { WelcomeComponent } from '.homepage/welcome/Welcome';
import { WelcomeComponent } from './homepage/welcome/welcome.component'; 
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './homepage/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    // SearchComponent,
    WelcomeComponent,
    HomepageComponent,
    SearchComponent
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

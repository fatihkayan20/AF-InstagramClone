import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/Home/home/home.component';
import { HomeStoriesComponent } from './pages/Home/home-stories/home-stories.component';
import { HomePostsComponent } from './pages/Home/home-posts/home-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { StoryComponent } from './pages/Story/story/story.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StoryContainerComponent } from './pages/Story/story-container/story-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeStoriesComponent,
    HomePostsComponent,
    StoryComponent,
    LoginPageComponent,
    StoryContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StoryComponent } from './pages/Story/story/story.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'stories/:username/:id' , component: StoryComponent},
  {path: 'login' , component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/users/posts/posts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { UsersNavComponent } from './pages/gallery/users-nav/users-nav.component';
import { SingleButtonNavComponent } from './pages/gallery/users-nav/single-button-nav/single-button-nav.component';
import { DisplayAlbumsComponent } from './pages/gallery/display-albums/display-albums.component';
import { SingleAlbumsComponent } from './pages/gallery/display-albums/single-albums/single-albums.component';
import { DisplayPhotosComponent } from './pages/gallery/display-photos/display-photos.component';
import { SinglePhotoComponent } from './pages/gallery/display-photos/single-photo/single-photo.component';
import { NavButtonsComponent } from './pages/nav-buttons/nav-buttons.component';
import { TodosComponent } from './pages/todos/todos.component';
import { SingleTodoComponent } from './pages/todos/single-todo/single-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    GalleryComponent,
    UsersNavComponent,
    SingleButtonNavComponent,
    DisplayAlbumsComponent,
    SingleAlbumsComponent,
    DisplayPhotosComponent,
    SinglePhotoComponent,
    NavButtonsComponent,
    TodosComponent,
    SingleTodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

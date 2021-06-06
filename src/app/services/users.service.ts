import { Injectable } from '@angular/core';
import { Album, Comment, Photo, Post, Todo, User } from '../models/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _buttonsStatus: number = 0;
  _selectedUser: number = 0;
  _selectedPost: number = 0;
  _selectedAlbumId: number = 1;
  _selectedPhotoId: number = 1;
  _selectedTodoId: number = 0;
  _users: Array<User> = [];
  _posts: Array<Post> = [];
  _comments: Array<Comment> = [];
  _albums: Array<Album> = [];
  _photos: Array<Photo> = [];
  _todos: Array<Todo> = [];

  constructor(public apiService: ApiService) {}

  async getAllUsers(url: string) {
    this._users = (await this.apiService.createGetService(url)) as Array<User>;
    console.log('Users: ', this._users);
  }

  async getTodosByUserId() {
    this._todos = (await this.apiService.createGetService(
      '/todos?userId=' + this._selectedUser
    )) as Array<Todo>;
    // this.updateSelectedUser(this._selectedUser);
    console.log('Todos: ', this._todos);
  }

  async getPostByUserId(userId: number) {
    this._posts = (await this.apiService.createGetService(
      '/posts?userId=' + userId
    )) as Array<Post>;
    this.updateSelectedUser(userId);
    console.log('Posts: ', this._posts);
  }
  async getCommentsByPostId(postId: number) {
    this._comments = (await this.apiService.createGetService(
      '/comments?postId=' + postId
    )) as Array<Comment>;
    this.updateSelectedPost(postId);
    console.log('Posts: ', this._comments);
  }

  async getAlbumsByUserId(userId: number) {
    this._albums = (await this.apiService.createGetService(
      '/albums?userId=' + userId
    )) as Array<Album>;
    this.updateSelectedUser(userId);
    console.log('Albums: ', this._albums);
  }

  async getPhotosByAlbumId(albumId: number) {
    this._photos = (await this.apiService.createGetService(
      '/photos?albumId=' + albumId
    )) as Array<Photo>;
    this.updateSelectedAlbum(albumId);
    console.log('Album Photos: ', this._photos);
  }

  updateSelectedUser(id: number) {
    if (id == this._selectedUser) this._selectedUser = 0;
    else this._selectedUser = id;
  }

  updateSelectedPost(id: number) {
    if (id == this._selectedPost) this._selectedPost = 0;
    else this._selectedPost = id;
  }

  updateSelectedAlbum(albumId: number) {
    if (albumId == this._selectedAlbumId) this._selectedAlbumId = 0;
    else this._selectedAlbumId = albumId;
  }

  updateSelectedPhoto(type: number) {
    if (type == 0) {
      this._selectedPhotoId = this._selectedPhotoId + 1;
      console.log('PHOTO ID: ', this._selectedPhotoId);
    } else this._selectedPhotoId = this._selectedPhotoId - 1;
  }
}

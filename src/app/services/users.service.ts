import { Injectable } from '@angular/core';
import { Album, Photo, Post, User } from '../models/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _selectedUser: number = 0;
  _selectedAlbumId: number = 1;
  _selectedPhotoId: number = 1;
  _buttonsStatus: number = 0;
  _users: Array<User> = [];
  _posts: Array<Post> = [];
  _albums: Array<Album> = [];
  _photos: Array<Photo> = [];

  constructor(public apiService: ApiService) {}

  async getAllUsers(url: string) {
    this._users = (await this.apiService.createGetService(url)) as Array<User>;
    console.log('Users: ', this._users);
  }

  async getTodosByUserId(userId: number) {
    this._posts = (await this.apiService.createGetService(
      '/todos?userId=' + userId
    )) as Array<Post>;
    this.updateSelectedUser(userId);
    console.log('Posts: ', this._posts);
  }
  async getPostByUserId(userId: number) {
    this._posts = (await this.apiService.createGetService(
      '/posts?userId=' + userId
    )) as Array<Post>;
    this.updateSelectedUser(userId);
    console.log('Posts: ', this._posts);
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

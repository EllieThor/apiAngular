import { Injectable } from '@angular/core';
import { Post, User } from '../models/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _users: Array<User> = [];
  _posts: Array<Post> = [];
  _selectedUser: number = 0;

  constructor(public apiService: ApiService) {}

  async getAllUsers(url: string) {
    this._users = (await this.apiService.createGetService(url)) as Array<User>;
    console.log('Users: ', this._users);
  }
  async getPostByUserId(userId: number) {
    this._posts = (await this.apiService.createGetService(
      '/posts?userId=' + userId
    )) as Array<Post>;
    this.updateSelectedUser(userId);
    console.log('Posts: ', this._posts);
  }
  updateSelectedUser(id: number) {
    if (id == this._selectedUser) this._selectedUser = 0;
    else this._selectedUser = id;
  }
}

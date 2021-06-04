import { Injectable } from '@angular/core';
import { User } from '../models/models';
import { ApiService } from './api.service';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _users: Array<User> = [];
  constructor(
    public settingsService: SettingsService,
    public apiService: ApiService
  ) {}
  async getAllUsers(url: string) {
    this._users = (await this.apiService.createGetService(url)) as Array<User>;
    console.log('Users: ', this._users);
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    public settingsService: SettingsService,
    public apiService: ApiService,
    public usersService: UsersService
  ) {
    this.apiService.createGetService('/users');
  }

  ngOnInit(): void {}
}

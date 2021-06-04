import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-nav',
  templateUrl: './users-nav.component.html',
  styleUrls: ['./users-nav.component.css'],
})
export class UsersNavComponent implements OnInit {
  constructor(public usersService: UsersService) {
    this.usersService.getAllUsers('/users');
  }

  ngOnInit(): void {}
}

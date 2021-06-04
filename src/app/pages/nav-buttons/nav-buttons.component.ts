import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css'],
})
export class NavButtonsComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}

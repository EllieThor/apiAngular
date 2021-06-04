import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-single-button-nav',
  templateUrl: './single-button-nav.component.html',
  styleUrls: ['./single-button-nav.component.css'],
})
export class SingleButtonNavComponent implements OnInit {
  @Input() user: User = new User();

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-display-albums',
  templateUrl: './display-albums.component.html',
  styleUrls: ['./display-albums.component.css'],
})
export class DisplayAlbumsComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}

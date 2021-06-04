import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-display-photos',
  templateUrl: './display-photos.component.html',
  styleUrls: ['./display-photos.component.css'],
})
export class DisplayPhotosComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-single-albums',
  templateUrl: './single-albums.component.html',
  styleUrls: ['./single-albums.component.css'],
})
export class SingleAlbumsComponent implements OnInit {
  @Input() album: Album = new Album();
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}

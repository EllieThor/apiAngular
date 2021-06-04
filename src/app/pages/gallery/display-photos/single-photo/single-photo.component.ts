import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.css'],
})
export class SinglePhotoComponent implements OnInit {
  @Input() photo: Photo = new Photo();
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}

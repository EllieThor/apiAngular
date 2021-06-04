import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() post: Post = new Post();
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}

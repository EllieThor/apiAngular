import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css'],
})
export class SingleCommentComponent implements OnInit {
  @Input() comment: Comment = new Comment();
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}

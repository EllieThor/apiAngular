import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css'],
})
export class SingleTodoComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}

export class User {
  id: number = 0;
  name: string = '';
  email: string = '';
  phone: string = '';
}

export class Post {
  userId: number = 0;
  id: number = 0;
  title: string = '';
  body: string = '';
}

export class Comment {
  postId: number = 0;
  id: number = 0;
  name: string = '';
  email: string = '';
  body: string = '';
}

export class Album {
  userId: number = 0;
  id: number = 0;
  title: string = '';
}

export class Photo {
  albumId: number = 0;
  id: number = 0;
  title: string = '';
  url: string = '';
  thumbnailUrl: string = '';
}

export class Todo {
  userId: number = 0;
  id: number = 0;
  title: string = '';
  completed: string = '';
}

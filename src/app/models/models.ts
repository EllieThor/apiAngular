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

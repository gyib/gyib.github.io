export class User {
  constructor(
    public name: string,
    public password: string
  ) {}
}

export interface Users {
  users: User[];
}

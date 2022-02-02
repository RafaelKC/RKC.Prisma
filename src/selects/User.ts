import { randomUUID } from 'crypto';

export default class User {
  public id: string;
  public createdAt: Date | undefined;
  public updatedAt: Date | undefined;
  public firstName: string;
  public lastName: string | null;
  public email: string;

  constructor(firsName: string, email: string, lastName: string | null = null) {
    this.id = randomUUID();
    this.firstName = firsName;
    this.lastName = lastName;
    this.email = email;
  }
}

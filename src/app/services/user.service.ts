import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Subject } from "rxjs/Subject";

@Injectable()
export class UserService {
  private users: User[] = [
     {
       firstName: 'Babacar',
       lastName: 'Sow',
       email: 'babacar@sow.com',
       drinkPreference: 'Coca',
      hobbies: [
         'coder',
         'la dégustation de café'
       ]
     }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  constructor() { }

}

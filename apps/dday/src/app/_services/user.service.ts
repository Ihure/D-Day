import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageMap } from '@ngx-pwa/local-storage';

import { User } from '@madiro-hack/data';

import { UserSetting } from '../shared/constants';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  constructor(private storage: StorageMap) {
    this.userSubject = new BehaviorSubject<User>(
      // @ts-ignore
      JSON.parse(localStorage.getItem(UserSetting.LOGGED_USER))
    );

    this.user = this.userSubject.asObservable();
  }

  public getLoggedUser(): User {
    return this.userSubject.value;
  }
}

import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { MOCK_USERS } from './auth.const';
import { IUser } from './auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #cookie = inject(CookieService);
  #usersDB = MOCK_USERS;

  public login(payload: {
    email: string;
    password: string;
  }): Observable<{ user: IUser | null; message: string }> {
    const user = this.#usersDB.find(
      (u) => u.email === payload.email && u.password === payload.password
    );
    if (user) {
      this.#cookie.set(
        'user',
        JSON.stringify(user),
        1,
        '/',
        undefined,
        true,
        'Lax'
      );
      return of({ user, message: `Добро пожаловать, ${user.displayName}!` });
    }
    return of({ user: null, message: 'Неверный логин или пароль' });
  }
}

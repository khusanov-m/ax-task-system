import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthActions, AuthSelectors } from './store';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  #router = inject(Router);
  #cookie = inject(CookieService);
  #store = inject(Store);
  #isAuthenticated = this.#store.select(AuthSelectors.selectAuthState);

  public constructor() {
    this.#isAuthenticated.pipe(takeUntilDestroyed()).subscribe((is) => {
      console.log(is);
      if (is) {
        this.#router.navigate(['/app']);
      }
    });
  }

  public ngOnInit(): void {
    const user = this.#cookie.get('user');
    if (user) {
      this.#store.dispatch(AuthActions.autoLogin({ user: JSON.parse(user) }));
    }
  }
}
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthSelectors } from './store';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  #router = inject(Router);
  #store = inject(Store);
  #isAuthenticated = this.#store.select(AuthSelectors.selectAuthState);

  public constructor() {
    this.#isAuthenticated.pipe(takeUntilDestroyed()).subscribe((is) => {
      if (is) {
        this.#router.navigate(['/app']);
      }
    });
  }
}

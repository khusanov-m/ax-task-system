import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AuthActions } from './features/auth/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  #cookie = inject(CookieService);
  #store = inject(Store);
  title = 'ax-task-system';

  public ngOnInit(): void {
    const user = this.#cookie.get('user');
    if (user) {
      this.#store.dispatch(AuthActions.autoLogin({ user: JSON.parse(user) }));
    }
  }
}

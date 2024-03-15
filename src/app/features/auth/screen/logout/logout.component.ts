import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AuthActions } from '../../store';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent implements OnInit {
  #cookie = inject(CookieService);
  #store = inject(Store);
  #router = inject(Router);

  public ngOnInit(): void {
    this.#store.dispatch(AuthActions.logout());
    this.#cookie.deleteAll('/');
    this.#router.navigate(['auth']);
  }
}

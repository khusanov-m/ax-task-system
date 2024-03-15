import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent, InputComponent } from '../../../../shared';
import { AuthActions } from '../../store';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    SvgIconComponent,
  ],
  templateUrl: './login-form.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  #store = inject(Store);
  #fb = inject(FormBuilder);

  public showPassword = signal(false);

  #loginForm = this.#fb.nonNullable.group({
    email: ['', [Validators.required, Validators.pattern('^.+@gmail.com$')]],
    password: ['', [Validators.required]],
  });
  public get form(): FormGroup {
    return this.#loginForm;
  }

  public togglePasswordVisibility(): void {
    this.showPassword.update((prev) => !prev);
  }

  public get emailErrorMessage(): string {
    const field = this.form.get('email');

    if (!field?.valid && (field?.touched || field?.dirty)) {
      return field?.hasError('required')
        ? 'Эл. почта обязательна'
        : field?.getError('pattern') && 'Введите почту в формате @gmail.com';
    }
    return '';
  }

  public get passwordErrorMessage(): string {
    const field = this.form.get('password');
    if (!field?.valid && (field?.touched || field?.dirty)) {
      return field?.hasError('required') ? 'Пароль обязателен' : '';
    }
    return '';
  }

  public onSubmit(): void {
    this.#store.dispatch(
      AuthActions.login({ payload: { ...this.form.value } })
    );
  }
}

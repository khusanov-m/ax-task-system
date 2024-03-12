import { Type } from '@angular/core';
import { FunctionalEffect } from '@ngrx/effects';
import { AuthEffects } from '../../features/auth/store/auth.effects';

export const AX_TASK_NGRX_EFFECTS: Array<
  Type<unknown> | Record<string, FunctionalEffect>
> = [AuthEffects];

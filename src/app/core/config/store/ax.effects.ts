import { Type } from '@angular/core';
import { FunctionalEffect } from '@ngrx/effects';
import { AuthEffects } from '../../auth/store/auth.effects';
import { NotificationEffects } from '../../notification/store/notification.effects';
import { TaskEffects } from '../../../features/task/store/task.effects';

export const AX_TASK_NGRX_EFFECTS: Array<
  Type<unknown> | Record<string, FunctionalEffect>
> = [NotificationEffects, AuthEffects, TaskEffects];

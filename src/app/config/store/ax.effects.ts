import { Type } from '@angular/core';
import { FunctionalEffect } from '@ngrx/effects';
import { AuthEffects } from '../../features/auth/store/auth.effects';
import { NotificationEffects } from '../../features/notification/store/notification.effects';
import { TaskEffects } from '../../features/task/store/task.effects';

export const AX_TASK_NGRX_EFFECTS: Array<
  Type<unknown> | Record<string, FunctionalEffect>
> = [NotificationEffects, AuthEffects, TaskEffects];

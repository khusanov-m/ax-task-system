import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { BadgePipe } from '../../utils/badge.pipe';
import { BadgeComponent } from '../badge/badge.component';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { RadioGroupComponent } from '../radio-group/radio-group.component';
import { InputCalendarComponent } from '../input-calendar/input-calendar.component';

@Component({
  selector: 'app-ui-demo',
  standalone: true,
  imports: [
    BadgeComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    SvgIconComponent,
    RadioGroupComponent,
    BadgePipe,
    InputCalendarComponent
  ],
  templateUrl: './ui-demo.component.html',
  styleUrl: './ui-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDemoComponent {}

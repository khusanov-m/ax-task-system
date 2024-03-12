import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-ui-demo',
  standalone: true,
  imports: [BadgeComponent, ButtonComponent, InputComponent, SelectComponent, SvgIconComponent],
  templateUrl: './ui-demo.component.html',
  styleUrl: './ui-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDemoComponent {}

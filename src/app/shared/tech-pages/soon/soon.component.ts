import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-soon',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './soon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoonComponent {}

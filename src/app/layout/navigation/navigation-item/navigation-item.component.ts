import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-navigation-item',
  standalone: true,
  imports: [SvgIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent {
  public item = input<{
    name: string;
    icon: string;
    route: string;
    line?: boolean;
    badge?: number;
  }>();
}

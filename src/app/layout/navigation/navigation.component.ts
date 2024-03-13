import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { NAVIGATION_LIST } from '../layout.const';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SvgIconComponent, NavigationItemComponent, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public items = NAVIGATION_LIST;
}

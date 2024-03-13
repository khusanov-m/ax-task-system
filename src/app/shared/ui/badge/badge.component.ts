import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IKeyValue } from '../ui.type';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  public variant = input('primary');

  #variants: IKeyValue = {
    primary: 'text-blue bg-[#F0F1FF]',
    warning: 'text-orange bg-[#FAF7E3]',
    success: 'text-lime-500 bg-lime-500/10',
    danger: 'text-red bg-[#FFEEEB]',
  };

  protected get variantClass(): string {
    return this.#variants[this.variant()];
  }
}

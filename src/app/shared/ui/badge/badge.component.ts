import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  variant = input('primary');
  #variants: { [key: string]: string } = {
    primary: 'text-blue bg-[#F0F1FF]',
    warn: 'text-orange bg-[#FAF7E3]',
    success: 'text-green bg-green/10',
    danger: 'text-red bg-[#FFEEEB]',
  };

  #text: { [key: string]: string } = {
    primary: 'Низкий',
    warn: 'Средний',
    success: 'Средний',
    danger: 'Высокий',
  };

  get variantClass(): string {
    return this.#variants[this.variant()];
  }

  get textValue(): string {
    return this.#text[this.variant()];
  }
}

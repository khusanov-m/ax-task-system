import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  variant = input('primary');
  disabled = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });

  #variants: { [key: string]: string } = {
    primary: 'bg-[#2B53E1] text-white hover:bg-blue',
    outline:
      'bg-white border-2 border-blue text-black hover:bg-blue hover:text-white',
  };

  get variantClass(): string {
    return this.#variants[this.variant()];
  }
}

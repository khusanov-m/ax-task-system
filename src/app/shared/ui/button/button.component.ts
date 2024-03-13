import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IKeyValue } from '../ui.type';
import { CnPipe } from './../../utils/cn.pipe';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CnPipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public variant = input('primary');
  public disabled = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public withIcon = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });

  #variants: IKeyValue = {
    primary: 'bg-[#2B53E1] border-transparent text-white hover:bg-blue',
    outline: 'bg-white border-blue text-black hover:bg-blue hover:text-white',
  };

  #iconState: IKeyValue = {
    primary: '',
    outline: 'hover:bg-white hover:text-blue',
  };

  protected get variantClass(): string {
    if (this.withIcon()) {
      return `${this.#variants[this.variant()]} ${
        this.#iconState[this.variant()]
      }`;
    }
    return this.#variants[this.variant()];
  }
}

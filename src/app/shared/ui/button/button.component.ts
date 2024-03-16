import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { IKeyValue } from '../ui.type';
import { CnPipe } from './../../utils/cn.pipe';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CnPipe, RouterLink, NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public variant = input('primary');
  public link = input('');
  public disabled = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public withIcon = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  @Output() public onClick = new EventEmitter<void>();

  #variants: IKeyValue = {
    primary: 'bg-[#2B53E1] border-transparent text-white hover:bg-ax-blue',
    outline:
      'bg-white border-ax-blue text-ax-black hover:bg-ax-blue hover:text-white',
  };

  #iconState: IKeyValue = {
    primary: '',
    outline: 'hover:bg-white hover:text-ax-blue',
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

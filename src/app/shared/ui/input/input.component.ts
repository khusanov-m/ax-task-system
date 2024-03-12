import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { CnPipe } from '../../utils/cn.pipe';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CnPipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  variant = input('primary');
  type = input('text');
  bind = input('');
  placeholder = input('');
  required = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  disabled = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  error = input('');

  @Output() iconClick = new EventEmitter<void>();

  #variants: { [key: string]: string } = {
    primary:
      'px-5 py-2.5 rounded-[10px] border-2 border-greylight focus:border-blue',
    outline:
      'peer px-3 pb-3 h-full w-full border-b-2 border-grey bg-transparent font-normal text-black outline outline-0 transition-all placeholder-shown:border-grey focus:border-blue focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-100',
  };
  #labelVars: { [key: string]: string } = {
    primary: '',
    outline:
      "after:content[''] pointer-events-none absolute left-3 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[12px] font-normal leading-[3] text-grey transition-all after:absolute after:-left-3 after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-grey after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5] peer-placeholder-shown:text-black peer-focus:text-[11px] peer-focus:leading-[3.5] peer-focus:text-blue peer-focus:after:-left-3 peer-focus:after:scale-x-100 peer-focus:after:border-blue peer-disabled:peer-placeholder-shown:border-grey",
  };

  get variantClass(): string {
    return this.#variants[this.variant()];
  }
  get labelClass(): string {
    return this.#labelVars[this.variant()];
  }
}

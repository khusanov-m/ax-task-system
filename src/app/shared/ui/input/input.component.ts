import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CnPipe } from '../../utils/cn.pipe';
import { IKeyValue } from '../ui.type';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CnPipe, ReactiveFormsModule, SvgIconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  public variant = input('primary');
  public type = input('text');
  public bind = input('');
  public label = input.required<string>();
  public placeholder = input<string | undefined>('');
  public autocomplete = input<string | undefined>();
  public form = input<FormGroup>(new FormGroup({}));
  public controlName = input<string>();
  public required = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public disabled = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public error = input<string | undefined>('');

  @Output() public iconClick = new EventEmitter<void>();

  #variants: IKeyValue = {
    primary:
      'px-5 py-2.5 rounded-[10px] border-2 border-ax-greylight focus:border-ax-blue',
    outline:
      'peer px-3 pb-3 h-full w-full border-b-2 border-ax-grey bg-transparent font-normal text-ax-black outline outline-0 transition-all placeholder-shown:border-ax-grey focus:border-ax-blue focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-100',
  };
  #labelVars: IKeyValue = {
    primary: '',
    outline:
      "after:content[''] pointer-events-none absolute left-3 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[12px] font-normal leading-[3] text-ax-grey transition-all after:absolute after:-left-3 after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-ax-grey after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[5] peer-placeholder-shown:text-ax-black peer-focus:text-[11px] peer-focus:leading-[3.5] peer-focus:text-ax-blue peer-focus:after:-left-3 peer-focus:after:scale-x-100 peer-focus:after:border-ax-blue peer-disabled:peer-placeholder-shown:border-ax-grey",
  };

  protected get variantClass(): string {
    return this.#variants[this.variant()];
  }
  protected get labelClass(): string {
    return this.#labelVars[this.variant()];
  }
}

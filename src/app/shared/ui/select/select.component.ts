import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
  signal,
} from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ClickOutsideDirective } from '../../utils/click-outside.directive';
import { IValueName } from '../ui.type';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [SvgIconComponent, ClickOutsideDirective],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  public options = input.required<IValueName[]>();
  public value = input<string>('');
  public placeholder = input<string>('');
  public bind = input('');
  public standalone = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public required = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public disabled = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public label = input('');

  @Output() public onSelect = new EventEmitter<IValueName>();
  public onChange(ev: Event): void {
    const value = (ev as Event & { target: { value: string } }).target.value;
    this.onSelect.emit({ value, displayName: '' });
  }

  // Standalone select element

  protected isShow = signal(false);
  public toggleShow(): void {
    this.isShow.update((v) => !v);
  }
  public onStandaloneSelect(data: IValueName): void {
    this.isShow.set(false);
    this.onSelect.emit(data);
  }
}

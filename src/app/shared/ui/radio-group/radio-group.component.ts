import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CnPipe } from '../../utils/cn.pipe';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [CnPipe, ReactiveFormsModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent {
  public options =
    input<{ color?: string; displayName: string; value: string }[]>();

  public color = input<string>('accent-ax-blue');
  public groupName = input<string>();
  public label = input.required<string>();
  public selected = input<string>();
  public required = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public disabled = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public form = input<FormGroup>(new FormGroup({}));
  public controlName = input<string>();
  @Output() public onCheck = new EventEmitter<string>();
  public onChange(ev: Event): void {
    const value = (ev as Event & { target: { value: string } }).target.value;
    this.onCheck.emit(value);
  }
}

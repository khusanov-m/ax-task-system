import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './pagination.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  public range = input<string>('');
  @Output() public onNext = new EventEmitter<void>();
  @Output() public onPrev = new EventEmitter<void>();
  public prevDisabled = input<boolean>(false);
  public nextDisabled = input<boolean>(false);
}

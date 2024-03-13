import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badge',
  standalone: true,
})
export class BadgePipe implements PipeTransform {
  public transform(value: string | undefined): string {
    switch (value) {
      case 'Высокий':
        return 'danger';
      case 'Средний':
        return 'warning';
      case 'Низкий':
        return 'primary';
      default:
        return 'danger';
    }
  }
}

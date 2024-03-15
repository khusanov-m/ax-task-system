import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  effect,
  input,
  signal,
} from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  startOfMonth,
} from 'date-fns';
import { ClickOutsideDirective } from '../../utils/click-outside.directive';

@Component({
  selector: 'app-input-calendar',
  standalone: true,
  imports: [DatePipe, SvgIconComponent, ClickOutsideDirective],
  templateUrl: './input-calendar.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCalendarComponent {
  public selectedDate: Date = new Date();
  public datePickerVisible = signal(false);
  public daysInMonth: (Date | null)[] = [];

  public label = input<string>();
  public required = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  public disabled = input(false, {
    transform: (v: boolean | string) => v.toString() === 'true' || v === '',
  });
  @Output() public onSelect = new EventEmitter<Date>();

  public constructor() {
    effect(() => {
      if (this.datePickerVisible()) {
        this.onSelect.emit(this.selectedDate);
        this.#generateCalendar();
      }
    });
  }

  #generateCalendar(): void {
    // Get the start and end dates of the current month
    const startDate = startOfMonth(this.selectedDate);
    const endDate = endOfMonth(this.selectedDate);

    // Get all the days in the current month
    const allDaysInMonth = eachDayOfInterval({
      start: startDate,
      end: endDate,
    });

    // Find the day of the week for the first day of the month
    const firstDayOfWeek = getDay(startDate); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

    // Generate an array of empty slots for the days before the first day of the month
    const emptySlots = Array.from({ length: firstDayOfWeek }, () => null);

    // Combine the empty slots with the days in the month
    this.daysInMonth = [...emptySlots, ...allDaysInMonth];
  }

  public selectDate(date: Date | null): void {
    if (date) {
      this.selectedDate = date;
      this.onSelect.emit(this.selectedDate);
      this.datePickerVisible.set(false);
    }
  }

  public changeMonth(amount: number): void {
    this.selectedDate = addMonths(this.selectedDate, amount);
    this.#generateCalendar();
  }

  public changeYear(amount: number): void {
    this.selectedDate = addMonths(this.selectedDate, amount * 12);
    this.#generateCalendar();
  }
}

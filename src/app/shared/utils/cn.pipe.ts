import { Pipe, PipeTransform } from '@angular/core';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

@Pipe({
  name: 'cn',
  standalone: true,
})
export class CnPipe implements PipeTransform {
  public transform(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
  }
}

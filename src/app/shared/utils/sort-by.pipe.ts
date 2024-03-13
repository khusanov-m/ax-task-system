import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  standalone: true,
})
export class SortByPipe implements PipeTransform {
  public transform(value: any[] | null, path: string, order?: string): any[] {
    // Check if "value" is null or not an array
    if (value === null) {
      return [];
    }
    if (!value || !Array.isArray(value) || !path) {
      return value;
    }

    const arrayToSort = [...value];

    arrayToSort.sort((a, b) => {
      const aValue = path.split('.').reduce((object, key) => object[key], a);
      const bValue = path.split('.').reduce((object, key) => object[key], b);

      if (path === 'priority') {
        const priorityOrder: { [key: string]: number } = {
          Высокий: 1,
          Средний: 2,
          Низкий: 3,
        };
        const priorityA = priorityOrder[a[path]];
        const priorityB = priorityOrder[b[path]];

        if (priorityA !== priorityB) {
          return priorityA - priorityB;
        }
      }

      if (path === 'date' && aValue instanceof Date && bValue instanceof Date) {
        return aValue.getTime() - bValue.getTime() > 0 ? -1 : 1;
      }

      if (order) {
        if (aValue < bValue) {
          return order === 'asc' ? -1 : 1;
        } else if (aValue > bValue) {
          return order === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      }

      return 0;
    });

    return arrayToSort;
  }
}

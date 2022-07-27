import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    value: { name: string; bundle: string; owner: string }[],
    search: string
  ): { name: string; bundle: string; owner: string }[] {
    if (value) {
      const regexp = new RegExp(search, 'i');
      const properties = Object.keys(value[0]);
      return [
        ...value.filter((item) => {
          return properties.some((property) =>
            regexp.test((item as any)[property])
          );
        }),
      ];
    }
    return value;
  }
}

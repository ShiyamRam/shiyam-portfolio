import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatBreadcrumb' })
export class FormatBreadcrumbPipe implements PipeTransform {
  transform(route: string): string {
    const routeMap: { [key: string]: string } = {
      '/about': 'About',
      '/services': 'Services',
      '/portfolio': 'Portfolio',
      '/certificate': 'Certificate',
      '/contact': 'Contact',
    };
    return routeMap[route] || '';
  }
}

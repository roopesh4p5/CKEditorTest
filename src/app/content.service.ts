import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  getContent(): Observable<string> {
    const content = `
    <h2>Project Description</h2>
    <p>This is a sample project using Angular and Tailwind CSS. It includes the integration of CKEditor.</p>
    <p>You can use CKEditor to create and edit rich text content with support for line breaks and headings.</p>
    <p>Feel free to customize and extend the project based on your requirements.</p>
  `;
    return of(content);
  }

  constructor() {}
}

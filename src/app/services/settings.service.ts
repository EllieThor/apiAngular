import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor() {}
}

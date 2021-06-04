import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    public settingsService: SettingsService
  ) {}

  createGetService(params: string) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.httpClient
          .get(this.settingsService.baseUrl + params)
          .subscribe(
            (data: any) => {
              console.log('Data : ', data);
              resolve(data);
            },
            (error: any) => {
              console.log('oops', error, error.error);
            }
          );
      } catch (err) {
        console.log('ERRORRR : ', err);
        console.log(err);
      }
    });
  }
}

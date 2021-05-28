import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly httpClient: HttpClient) {}

  get(url: string, httpOptions: any = {}): Observable<any> {
    return this.httpClient.get(url, httpOptions).pipe(
      catchError((error) => {
        console.error('Handle error...', error);
        return throwError(error);
      })
    );
  }
}

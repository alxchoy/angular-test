import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';

import {
  BreakingBadCharacter,
  Character,
} from '../models/breakingBand.interface';

@Injectable({
  providedIn: 'root',
})
export class BreakingBadService {
  private baseApi: string = 'https://www.breakingbadapi.com/api';

  constructor(private http: HttpService) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get(`${this.baseApi}/characters`).pipe(
      map((response) => {
        return response.map((element: BreakingBadCharacter) => ({
          char_id: element.char_id,
          name: element.name,
          nickname: element.nickname,
          status: element.status,
        }));
      })
    );
  }
}

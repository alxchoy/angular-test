import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BreakingBadService } from './breakingBad.service';
import { Character } from '../models/breakingBand.interface';

const charactersUrl = 'https://www.breakingbadapi.com/api/characters';

describe('BreakingBadService', () => {
  let breakingBadService: BreakingBadService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BreakingBadService],
    });
    breakingBadService = TestBed.inject(BreakingBadService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('get all Breaking Bad characters', () => {
    let serviceCharactersList: Character[] | undefined;
    const charactersList: Character[] = [
      {
        char_id: 1,
        name: 'Walter White',
        nickname: 'Heisenberg',
        status: 'Presumed dead',
      },
      {
        char_id: 2,
        name: 'Jesse Pinkman',
        nickname: "Cap n' Cook",
        status: 'Alive',
      },
    ];

    breakingBadService.getAllCharacters().subscribe((elements) => {
      serviceCharactersList = elements;
    });
    controller
      .expectOne({ method: 'GET', url: charactersUrl })
      .flush(charactersList);
    controller.verify();

    expect(serviceCharactersList).toEqual(charactersList);
  });

  it('passes through search errors', () => {
    const status = 500;
    const statusText = 'Server errors';
    const errorEvent = new ErrorEvent('Error service');
    let currentError: HttpErrorResponse | undefined;

    breakingBadService.getAllCharacters().subscribe(
      () => {
        fail('Error');
      },
      (error) => {
        currentError = error;
      },
      () => {
        fail('complete');
      }
    );

    controller
      .expectOne(charactersUrl)
      .error(errorEvent, { status, statusText });

    if (!currentError) {
      throw new Error('Must be define error');
    }
    expect(currentError.error).toBe(errorEvent);
    expect(currentError.status).toBe(status);
    expect(currentError.statusText).toBe(statusText);
  });
});

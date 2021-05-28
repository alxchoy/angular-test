import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { BreakingBadService } from '../shared/services/breakingBad.service';
import { Character } from '../shared/models/breakingBand.interface';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  const charactersList = [
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
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let fakeBreakingBadService: BreakingBadService;

  beforeEach(async () => {
    fakeBreakingBadService = jasmine.createSpyObj<BreakingBadService>(
      'BreakingBadService',
      {
        getAllCharacters: of(charactersList),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatTableModule,
      ],
      providers: [
        { provide: BreakingBadService, useValue: fakeBreakingBadService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    const homeComponent = fixture.debugElement.componentInstance;
    expect(homeComponent).toBeTruthy();
  });

  it('should slice list by page', () => {
    const pagination = {
      pageIndex: 0,
      previousPageIndex: 0,
      pageSize: 2,
      length: 0,
    };
    component.changePaginationPage(pagination);
    fixture.detectChanges();
    const sliceList = component.tableList.slice(
      pagination.pageIndex * pagination.pageSize,
      pagination.pageIndex * pagination.pageSize + pagination.pageSize
    );
    expect(component.tableList).toEqual(sliceList);
  });

  it('should open dialog on call deleteCharacter method', () => {
    const character: Character = {
      char_id: 1,
      name: 'Walter White',
      nickname: 'Heisenberg',
      status: 'Presumed dead',
    };
    const openDialogSpy = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(true),
    } as any);
    component.deleteCharacter(character);
    fixture.detectChanges();

    expect(openDialogSpy).toHaveBeenCalled();
  });
});

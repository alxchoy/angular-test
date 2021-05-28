import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CharactersListComponent } from './characters-list.component';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const characterListComponent = fixture.debugElement.componentInstance;
    expect(characterListComponent).toBeTruthy();
  });

  it('renders an independent table', () => {
    const table = fixture.debugElement.query(By.css('app-table'));
    expect(table).toBeTruthy();
  });

  it('pasess a list to table dataSource', () => {
    component.list = [
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
    fixture.detectChanges();
    const table = fixture.debugElement.query(By.css('app-table'));
    expect(table.properties.dataSource).toBe(component.list);
  });
});

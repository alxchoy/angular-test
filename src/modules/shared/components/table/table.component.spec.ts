import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<TableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [MatTableModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.dataSource = [{ chard_id: 1, name: 'will' }];
    component.columnsConfig = [
      { id: 'char_id', name: 'Nro.' },
      { id: 'name', name: 'Nombre' },
    ];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const tableListComponent = fixture.debugElement.componentInstance;
    expect(tableListComponent).toBeTruthy();
  });

  it('should has the correct columns number', (done) => {
    fixture.whenStable().then(() => {
      const columns = fixture.debugElement.queryAll(
        By.css('.mat-table thead th')
      );
      expect(columns.length).toBe(component.columnsList.length);
      done();
    });
  });

  it('should has the correct rows number', (done) => {
    fixture.whenStable().then(() => {
      const rows = fixture.debugElement.queryAll(By.css('.mat-table tbody tr'));
      expect(rows.length).toBe(component.dataSource.length);
      done();
    });
  });

  it('should validate if exist buttons in row', (done) => {
    fixture.whenStable().then(() => {
      const buttonConfig = component.columnsConfig.find(
        (element) => element.id === 'btn'
      );
      const foundButtons =
        buttonConfig && buttonConfig.buttonList
          ? buttonConfig.buttonList.length
          : 0;
      const buttons = fixture.debugElement.queryAll(
        By.css('.mat-table tbody tr .mat-column-btn button')
      );
      expect(buttons.length).toBe(foundButtons);
      done();
    });
  });
});

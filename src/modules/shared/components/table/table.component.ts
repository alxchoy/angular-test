import { Component, Input, OnInit } from '@angular/core';

import { ColumnTableConfig } from './table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit {
  @Input() dataSource: Array<T> = [];
  @Input() columnsConfig: ColumnTableConfig[] = [];
  columnsList: string[] = [];

  ngOnInit() {
    this.columnsList = this.columnsConfig.map((val) => val.id);
  }
}

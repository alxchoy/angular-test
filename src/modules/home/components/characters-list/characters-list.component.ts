import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Character } from '../../../shared/models/breakingBand.interface';
import { ColumnTableConfig } from '../../../shared/components/table/table.interface';

@Component({
  selector: 'app-characters-list',
  template: `
    <div class="container">
      <app-table [dataSource]="list" [columnsConfig]="columnTableConfig">
      </app-table>
    </div>
  `,
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  @Input() list: Character[] = [];
  @Output() handleDelete = new EventEmitter<Character>();
  columnTableConfig: ColumnTableConfig[] = [];

  ngOnInit() {
    this.columnTableConfig = [
      { id: 'char_id', name: 'Nro.' },
      { id: 'name', name: 'Nombre' },
      { id: 'nickname', name: 'Alias' },
      { id: 'status', name: 'Estado' },
      {
        id: 'btn',
        name: 'Acción',
        buttonList: [
          {
            description: 'Borrar',
            action: (params: Character) => this.handleDelete.emit(params),
            type: 'alert',
          },
        ],
      },
    ];
  }
}

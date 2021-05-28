import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Character } from '../../../shared/models/breakingBand.interface';

@Component({
  selector: 'app-characters-pagination',
  template: `
    <div class="container">
      <mat-paginator
        [length]="listItems.length"
        [pageSize]="rowsByPage"
        [pageSizeOptions]="[5, 10, 25]"
        (page)="changePaginationPage($event)"
      >
      </mat-paginator>
    </div>
  `,
  styleUrls: ['./characters-pagination.component.scss'],
})
export class CharactersPaginationComponent {
  @Input() listItems: Character[] = [];
  @Input() rowsByPage: number = 10;
  @Output() handleChange = new EventEmitter<PageEvent>();

  changePaginationPage(event: PageEvent) {
    this.handleChange.emit(event);
  }
}

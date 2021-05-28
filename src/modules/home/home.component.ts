import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BreakingBadService } from '../shared/services/breakingBad.service';
import { Character } from '../shared/models/breakingBand.interface';
import { ModalAlertComponent } from '../shared/components/modals/alert/modalAlert.component';
import { NotificationComponent } from '../shared/components/notification/notification.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Listado test alicorp';
  characterList: Character[] = [];
  tableList: Character[] = [];
  numberRowsByPage: number = 10;
  currentIndexPage: number = 0;

  constructor(
    public dialog: MatDialog,
    private readonly breakingBadService: BreakingBadService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.breakingBadService.getAllCharacters().subscribe((res) => {
      this.characterList = res;
      this.tableList = this.characterList.slice(
        this.currentIndexPage,
        this.numberRowsByPage
      );
    });
  }

  deleteCharacter(character: Character) {
    this.dialog
      .open(ModalAlertComponent)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.characterList = this.characterList.filter(
            (char: Character) => char.char_id !== character.char_id
          );
          this.tableList = this.setTableList(
            this.characterList,
            this.currentIndexPage,
            this.numberRowsByPage
          );
          this.snackBar.openFromComponent(NotificationComponent, {
            data: 'La fila ha sido eliminada',
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
  }

  changePaginationPage(event: PageEvent) {
    this.numberRowsByPage = event.pageSize;
    this.currentIndexPage = event.pageIndex;
    this.tableList = this.setTableList(
      this.characterList,
      this.currentIndexPage,
      this.numberRowsByPage
    );
  }

  private setTableList(
    charactersList: Character[],
    currentPage: number,
    rowsByPage: number
  ): Character[] {
    return charactersList.slice(
      currentPage * rowsByPage,
      currentPage * rowsByPage + rowsByPage
    );
  }
}

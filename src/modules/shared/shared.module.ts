import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TableComponent } from './components/table/table.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalAlertComponent } from './components/modals/alert/modalAlert.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  imports: [MatTableModule, CommonModule, MatDialogModule],
  declarations: [
    TableComponent,
    ButtonComponent,
    ModalAlertComponent,
    NotificationComponent,
  ],
  exports: [
    TableComponent,
    ButtonComponent,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    CommonModule,
    MatProgressSpinnerModule,
    NotificationComponent,
  ],
})
export class SharedModule {}

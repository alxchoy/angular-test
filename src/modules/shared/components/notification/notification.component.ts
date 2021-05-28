import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification',
  template: `
    <div class="notification">
      <span>{{ data }}</span>
    </div>
  `,
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}
}

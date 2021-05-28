import { Component, Input, HostBinding } from '@angular/core';

import { ButtonConfig } from './button.interface';

@Component({
  selector: 'button[mp-btn]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() config: ButtonConfig = {};
  @HostBinding('class') get className() {
    return this.config.type || 'primary';
  }
}

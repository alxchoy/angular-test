import { Component } from '@angular/core';

import { ButtonConfig } from '../../button/button.interface';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modalAlert.component.html',
  styleUrls: ['./modalAlert.component.scss'],
})
export class ModalAlertComponent {
  btnConfigList: ButtonConfig[] = [];

  constructor() {
    this.btnConfigList = [
      { type: 'primary', description: 'Aceptar' },
      { type: 'secondary', description: 'Cancelar' },
    ];
  }
}

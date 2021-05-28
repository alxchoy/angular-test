import { ButtonConfig } from '../button/button.interface';

interface ButtonTable extends ButtonConfig {
  description: string;
  action: (data?: any) => void;
}

export interface ColumnTableConfig {
  id: string;
  name: string;
  buttonList?: ButtonTable[];
}

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersPaginationComponent } from './components/characters-pagination/characters-pagination.component';

@NgModule({
  declarations: [
    HomeComponent,
    CharactersListComponent,
    CharactersPaginationComponent,
  ],
  exports: [HomeComponent],
  imports: [SharedModule],
})
export class HomeModule {}

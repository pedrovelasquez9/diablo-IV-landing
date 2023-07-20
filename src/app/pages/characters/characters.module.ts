import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharactersComponent } from './characters.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharactersComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }

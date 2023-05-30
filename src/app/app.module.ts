import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { LecteurComponent } from './lecteur/lecteur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    PlaylistComponent,
    LecteurComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

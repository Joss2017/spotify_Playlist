import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Track } from '../Track';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  selectValue: string = 'url';
  url: string = '';
  fichierLocal: File | null = null;

  @Output() newTrack = new EventEmitter<Track>();

  ngOnInit(): void {}

  onSelected(event: any): void {
    if (event.target.value === 'url') {
      this.selectValue = 'url';
    } else if (event.target.value === 'fichier local') {
      this.selectValue === 'fichier local';
    }
  }

  onSubmitUrl(fileUrl: string) {
    // La valeur est transmise depuis le formulaire via le paramètre de la méthode
    console.log('file URL', fileUrl);

    // Construire un objet de la classe Track qui représente le fichier à cette URL
    let trackUrl: Track = new Track();
    trackUrl.url = fileUrl;

    // Émettre cet objet track dans l'Output à destination du parent
    this.newTrack.emit(trackUrl);
  }

  onSubmitFile(/* TODO : il va falloir prendre le fichier en paramètre ici */) {
    // TODO : faire comme pour onSumbitUrl()
    // (mais la facon de construire l'objet Track sera probablement un peu différente)
  }
}

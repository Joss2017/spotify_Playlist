import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent {
  selectValue: string = 'url';
  url: string = '';
  fichierLocal: File | null = null;


  onSelected(event: any): void {
    this.fichierLocal = event.target;
  }

  onSubmit() {
    if (this.selectValue === 'url') {
      console.log('Ajout URL: ', this.url);
    } else if (this.selectValue === 'fichierLocal') {
      console.log('Ajout fichierLocal: ', this.fichierLocal);
    }
  }
}

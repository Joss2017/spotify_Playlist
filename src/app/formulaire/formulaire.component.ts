import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  selectValue: string = 'url';
  url: string = '';
  fichierLocal: File | null = null;

  ngOnInit(): void {}

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

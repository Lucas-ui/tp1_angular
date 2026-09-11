import { Component, signal, input, Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  styleUrl: './etudiant.css',
  templateUrl: './etudiant.html',
})
export class Etudiant {
  nomEtu = input<string>();
  prenomEtu = input<string>();
  @Input() statutEtu: boolean = false;

  retNomEtu() {
    return this.nomEtu;
  }

  retPrenomEtu() {
    return this.prenomEtu;
  }
}

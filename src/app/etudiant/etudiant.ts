import { Component, signal, Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  styleUrl: './etudiant.css',
  templateUrl: './etudiant.html',
})
export class Etudiant {
  @Input() nomEtu: string = 'Rolland';
  @Input() prenomEtu: string = 'Lucas';
  @Input() statutEtu: string = 'Absent';

  retNomEtu() {
    return this.nomEtu;
  }

  retPrenomEtu() {
    return this.prenomEtu;
  }
}

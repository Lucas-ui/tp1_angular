import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  styleUrl: './etudiant.css',
  templateUrl: './etudiant.html',
  imports: [CommonModule, NgClass, NgStyle],
})
export class Etudiant {
  nomEtu = input<string>();
  prenomEtu = input<string>();
  statutEtu = model<boolean>(false);
  commentaireEtu = input<string>();

  retNomEtu() {
    return this.nomEtu;
  }

  retPrenomEtu() {
    return this.prenomEtu;
  }

  getColorEtu() {
    if (!this.statutEtu()) {
      return 'red';
    }
    return 'green';
  }

  rendrePresent() {
    this.statutEtu.set(true);
  }

  rendreAbsent() {
    this.statutEtu.set(false);
  }
}

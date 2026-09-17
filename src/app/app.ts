import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Etudiant } from './etudiant/etudiant';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  imports: [RouterOutlet, Etudiant, FormsModule, NgIf, NgFor],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nomMatiere = "Module Champs d'application";
  numeroSeance: string = '1';
  estAuth = signal(false);
  commentaireSeance: string = '';
  tabEtudiants = [
    { nom: 'Dupont', prenom: 'Jean', present: false },
    { nom: 'Martin', prenom: 'Sophie', present: false },
    { nom: 'Lorel', prenom: 'Guillaume', present: true },
    { nom: 'Gaillac', prenom: 'Mathéo', present: true },
  ];

  constructor() {
    setTimeout(() => {
      this.estAuth.set(true);
    }, 3000);
  }

  rendTousPres() {
    console.log('test');
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Etudiant } from './etudiant/etudiant';

@Component({
  imports: [RouterOutlet, Etudiant],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nomMatiere = "Module Champs d'application";
  numeroSeance: string = '1';
  estAuth = signal(false);

  constructor() {
    setTimeout(() => {
      this.estAuth.set(true);
    }, 3000);
  }

  rendTousPres() {
    console.log('test');
  }
}

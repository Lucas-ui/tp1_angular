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
  protected readonly nomMatiere = signal("Module Champs d'application");
  numeroSeance: string = '1';
  estAuth: boolean = true;

  constructor() {
    setTimeout(() => {
      this.estAuth = true;
    }, 5000);
  }

  rendTousPres() {
    console.log('test');
  }
}

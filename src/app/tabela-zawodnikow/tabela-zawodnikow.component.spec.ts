import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-zawodnikow',
  templateUrl: './tabela-zawodnikow.component.html',
  styleUrls: ['./tabela-zawodnikow.component.scss']
})
export class TabelaZawodnikowComponent {
  zawodnicy = [
    { ImieINazwisko: 'John Doe', Pseudonim: 'The Crusher', WygraneWalki: 10 },
    { ImieINazwisko: 'Jane Smith', Pseudonim: 'Iron Fist', WygraneWalki: 8 }
  ];
}

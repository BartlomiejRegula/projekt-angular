// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-tabela-zawodnikow',
//   templateUrl: './tabela-zawodnikow.component.html',
//   styleUrls: ['./tabela-zawodnikow.component.scss'],
//   standalone: true,
//   imports: [CommonModule],
// })
// export class TabelaZawodnikowComponent {
//   @Input() zawodnicy: Array<{
//     imieINazwisko: string;
//     pseudonim: string;
//     wygraneWalki: number;
//     kategoriaWagowa: string;
//     aktywny: boolean;
//     dataPierwszejWalki: string;
//   }> = [];
// }
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-zawodnikow',
  templateUrl: './tabela-zawodnikow.component.html',
  styleUrls: ['./tabela-zawodnikow.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TabelaZawodnikowComponent {
  @Input() zawodnicy: any[] = [];
}

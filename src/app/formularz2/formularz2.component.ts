// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-formularz2',
//   templateUrl: './formularz2.component.html',
//   styleUrls: ['./formularz2.component.scss'],
//   standalone: true,
//   imports: [FormsModule],
// })
// export class Formularz2Component {
//   formData = {
//     zawodnik: '',
//     zwierzeSzczur: false,
//     zwierzeGoryl: false,
//     zwierzeKangur: false,
//     zwierzeSlon: false,
//     zwierzeTygrys: false,
//     zwierzeKrowa: false,
//     zwierzePies: false,
//     czasWalki: 0,
//     bron: '',
//     preferujeGoryle: false,
//     przygotowanie: 5,
//   };

//   wyslij() {
//     console.log('Formularz 2 wysłany:', this.formData);
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularz2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formularz2.component.html',
  styleUrls: ['./formularz2.component.scss'],
})
export class Formularz2Component {
  formData = {
    zawodnik: '',
    zwierzeta: {
      szczur: false,
      goryl: false,
      kangur: false,
      slon: false,
      tygrys: false,
      krowa: false,
      pies: false,
    },
    czasWalki: 0,
    ulubionaBron: '',
    preferujeGoryle: false,
    poziomPrzygotowania: 0,
  };

  wyslijFormularz() {
    if (this.formData.czasWalki < 0) {
      alert('Czas walki nie może być ujemny.');
      return;
    }
    console.log('Formularz 2 dane:', this.formData);
  }
}

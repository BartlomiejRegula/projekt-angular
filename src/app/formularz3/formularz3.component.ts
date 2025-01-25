// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-formularz3',
//   templateUrl: './formularz3.component.html',
//   styleUrls: ['./formularz3.component.scss'],
//   standalone: true,
//   imports: [FormsModule],
// })
// export class Formularz3Component {
//   formData = {
//     najdluzszaWalka: 0,
//     mistrzostwo: false,
//     najsilniejszyPrzeciwnik: '',
//     najdluzszyStreak: 0,
//     ranking: '',
//     dataKariery: '',
//   };

//   wyslijFormularz() {
//     // Walidacje
//     if (this.formData.najdluzszaWalka < 0) {
//       alert('Czas walki nie może być ujemny!');
//       return;
//     }

//     const regexPrzeciwnik = /^[a-zA-Z\s]+$/;
//     if (!regexPrzeciwnik.test(this.formData.najsilniejszyPrzeciwnik)) {
//       alert('Najsilniejszy pokonany przeciwnik może zawierać tylko litery!');
//       return;
//     }

//     if (!this.formData.ranking) {
//       alert('Wybierz najwyższe miejsce w rankingu!');
//       return;
//     }

//     console.log('Formularz został wysłany:', this.formData);
//     alert('Formularz został pomyślnie wysłany!');

//     // Reset formularza
//     this.formData = {
//       najdluzszaWalka: 0,
//       mistrzostwo: false,
//       najsilniejszyPrzeciwnik: '',
//       najdluzszyStreak: 0,
//       ranking: '',
//       dataKariery: '',
//     };
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularz3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formularz3.component.html',
  styleUrls: ['./formularz3.component.scss'],
})
export class Formularz3Component {
  formData = {
    dlugoscWalki: 0,
    czyMistrzostwo: false,
    przeciwnik: '',
    streak: 0,
    miejsceWRankingu: '',
    poczatekKariery: '',
  };

  wyslijFormularz() {
    if (this.formData.dlugoscWalki < 0) {
      alert('Najdłuższa walka nie może mieć ujemnego czasu.');
      return;
    }
    console.log('Formularz 3 dane:', this.formData);
  }
}

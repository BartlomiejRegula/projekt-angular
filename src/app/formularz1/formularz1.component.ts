// import { Component, EventEmitter, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-formularz1',
//   templateUrl: './formularz1.component.html',
//   styleUrls: ['./formularz1.component.scss'],
//   standalone: true,
//   imports: [FormsModule, CommonModule],
// })
// export class Formularz1Component {
//   @Output() zawodnikDodany = new EventEmitter<any>();

//   formData = {
//     imieINazwisko: '',
//     pseudonim: '',
//     wygraneWalki: 0,
//     kategoriaWagowa: '',
//     aktywny: false,
//     dataPierwszejWalki: '',
//   };

//   formSubmitted = false;

//   dodajZawodnika() {
//     this.formSubmitted = true;

//     if (
//       !this.formData.imieINazwisko ||
//       !this.formData.pseudonim ||
//       !this.formData.kategoriaWagowa ||
//       !this.formData.dataPierwszejWalki
//     ) {
//       return;
//     }

//     this.zawodnikDodany.emit(this.formData);

//     this.formData = {
//       imieINazwisko: '',
//       pseudonim: '',
//       wygraneWalki: 0,
//       kategoriaWagowa: '',
//       aktywny: false,
//       dataPierwszejWalki: '',
//     };
//     this.formSubmitted = false;
//   }
// }
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularz1',
  templateUrl: './formularz1.component.html',
  styleUrls: ['./formularz1.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class Formularz1Component {
  @Output() zawodnikDodany = new EventEmitter<any>();

  formData = {
    imieINazwisko: '',
    pseudonim: '',
    wygraneWalki: 0,
    kategoriaWagowa: '',
    aktywny: false,
    dataPierwszejWalki: '',
  };

  formSubmitted = false;

  dodajZawodnika() {
    this.formSubmitted = true;

    // Walidacja pól
    if (
      !this.formData.imieINazwisko ||
      !this.formData.pseudonim ||
      !this.formData.kategoriaWagowa ||
      !this.formData.dataPierwszejWalki
    ) {
      return; // Zatrzymujemy, jeśli dane są nieprawidłowe
    }

    // Emitowanie danych do rodzica
    this.zawodnikDodany.emit(this.formData);

    // Reset formularza i stanu walidacji
    this.formData = {
      imieINazwisko: '',
      pseudonim: '',
      wygraneWalki: 0,
      kategoriaWagowa: '',
      aktywny: false,
      dataPierwszejWalki: '',
    };
    this.formSubmitted = false;
  }
}

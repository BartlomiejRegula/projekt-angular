import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TabelaZawodnikowComponent } from './tabela-zawodnikow/tabela-zawodnikow.component';
import { Formularz1Component } from './formularz1/formularz1.component';
import { Formularz2Component } from './formularz2/formularz2.component';
import { Formularz3Component } from './formularz3/formularz3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TabelaZawodnikowComponent,
    Formularz1Component,
    Formularz2Component,
    Formularz3Component,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  zawodnicy: any[] = [];
  widocznyFormularz: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/zawodnicy').subscribe((data) => {
      this.zawodnicy = data;
    });
  }

  dodajZawodnika(zawodnik: any) {
    this.http.post('http://localhost:3000/zawodnicy', zawodnik).subscribe((nowyZawodnik) => {
      this.zawodnicy.push(nowyZawodnik);
    });
  }

  pokazFormularz(formularz: string) {
    this.widocznyFormularz = formularz;
  }
}

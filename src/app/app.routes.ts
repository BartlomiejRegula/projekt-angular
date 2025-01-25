import { Routes } from '@angular/router';
import { TabelaZawodnikowComponent } from './tabela-zawodnikow/tabela-zawodnikow.component';
import { Formularz1Component } from './formularz1/formularz1.component';
import { Formularz2Component } from './formularz2/formularz2.component';
import { Formularz3Component } from './formularz3/formularz3.component';

export const routes: Routes = [
  { path: '', component: TabelaZawodnikowComponent },
  { path: 'formularz1', component: Formularz1Component },
  { path: 'formularz2', component: Formularz2Component },
  { path: 'formularz3', component: Formularz3Component },
];

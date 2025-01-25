import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZawodnikService {
  private apiUrl = 'http://localhost:3000/zawodnicy';

  constructor(private http: HttpClient) {}

  // Pobierz wszystkich zawodników
  getZawodnicy(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Dodaj nowego zawodnika
  addZawodnik(zawodnik: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, zawodnik);
  }

  // Usuń zawodnika
  deleteZawodnik(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Zaktualizuj dane zawodnika
  updateZawodnik(id: number, zawodnik: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, zawodnik);
  }
}

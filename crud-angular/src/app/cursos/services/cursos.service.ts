import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Curso } from '../model/curso';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  listAll() {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        first(),
        tap(cursos => console.log(cursos))
      );
  }
}

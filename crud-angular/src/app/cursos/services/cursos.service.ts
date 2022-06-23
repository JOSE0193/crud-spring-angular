import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/api/courses';

  constructor(
    private httpClient: HttpClient
  ) { }

  listAll() {
    return this.httpClient.get<Curso[]>(this.API)
      .pipe(
        first(),
        delay(3000),
        tap(cursos => console.log(cursos))
      );
  }
}

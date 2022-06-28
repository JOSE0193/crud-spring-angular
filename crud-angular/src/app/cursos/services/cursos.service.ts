import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/api/coursos';

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

  save(record: Curso){
    return this.httpClient.post<Curso>(this.API, record);
  }
}

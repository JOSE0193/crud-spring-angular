import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  displayedColumns = ['_id', 'nome', 'categoria', 'actions']

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cursos$ = this.cursosService.listAll()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos!');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd(){
    this.router.navigate(['novo'], {relativeTo: this.route})
  }
}

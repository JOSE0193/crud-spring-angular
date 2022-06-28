import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CursosService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(result => console.log(result),
      error => this.onError()
    );
  }

  onCancel(){

  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso!', '', {duration: 5000});
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    private service: CursosService) {
    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  onCancel(){
    
  }

}

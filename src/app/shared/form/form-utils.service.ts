import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormGroup, FormGroup, NumberValueAccessor, UntypedFormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }

  validateAllFormFields(formGroup: UntypedFormGroup | UntypedFormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if(control instanceof UntypedFormControl){
        control.markAsTouched({onlySelf: true});
      } else if(control instanceof UntypedFormGroup || control instanceof UntypedFormArray){
        control.markAsTouched({onlySelf: true});
        this.validateAllFormFields(control);
      }
      control?.markAsTouched();


    });
  }

  getErrorMessage(formGroup: UntypedFormGroup, fieldName: string){
    const field = formGroup.get(fieldName) as UntypedFormControl;
    return this.getErrorMessageFromField(field);
  }

  getErrorMessageFromField(field: UntypedFormControl) {
    if(field?.hasError('required')) {
      return 'Campo Obrigatório'
    }

    if(field?.hasError('minlength') && field.errors) {
      const requiredlength = field.errors['minlength']['requiredLength'];
      return `Tamanho mínimo precisa ser de ${requiredlength} caracteres.`;
    }

    if(field?.hasError('maxlength') && field.errors) {
      const requiredlength = field.errors['minlength']['requiredLength'];
      return `Tamanho máximo precisa ser de ${requiredlength} caracteres.`;
    }

    return field['errors'] ? 'Error' : '';
  }

  getFormArrayFieldErrorMessage(formGroup: FormGroup, formArrayName: string, fieldName: string, index: number) {
    const formArray = formGroup.get(formArrayName) as UntypedFormArray;
    const field = formArray.controls[index].get(fieldName) as UntypedFormControl;
    return this.getErrorMessageFromField(field);
  }

  isFormArrayRequired(formGroup: UntypedFormGroup, formArrayName: string) {
    const formArray = formGroup.get(formArrayName) as UntypedFormArray;
    return !formArray.valid && formArray.hasError('required') && formArray.touched;
  }

}

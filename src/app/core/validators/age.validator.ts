import { AbstractControl, ValidatorFn } from "@angular/forms";

export function AgeValid() : ValidatorFn | null {
  return (control : AbstractControl) => {
    const maDate : Date = new Date(control.value)
    if(maDate == null) return null
    if(maDate.getFullYear() <= (new Date().getFullYear() - 13)) {
      return null
    }
    else return {dateError : 'Le fan est trop jeune'}
  }
}

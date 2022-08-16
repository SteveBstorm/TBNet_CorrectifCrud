import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgeValid } from 'src/app/core/validators/age.validator';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {

  fg : FormGroup
  constructor(
    private builder : FormBuilder,
    private fanService : FanService
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.fg = this.builder.group({
      nom : [null, Validators.required],
      dateNaissance : [null, [Validators.required, AgeValid]],
      listeSerie : this.builder.array([])
    })
  }

  validForm() {
    this.fanService.ajout(this.fg.value)
  }

  getListeSeriesControl() : FormArray {
    return this.fg.get('listeSerie') as FormArray
  }

  ajoutSerie() {

    this.getListeSeriesControl().push(new FormControl(null, Validators.required))
  }
}

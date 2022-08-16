import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgeValid } from 'src/app/core/validators/age.validator';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-maj',
  templateUrl: './maj.component.html',
  styleUrls: ['./maj.component.scss']
})
export class MajComponent implements OnInit {

  fg : FormGroup
  currentFan : Fan
  constructor(
    private builder : FormBuilder,
    private fanService : FanService,
    private ar : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.ar.snapshot.params['id']
    this.currentFan = this.fanService.detail(id)
    this.initForm()
  }

  initForm() {
    this.fg = this.builder.group({
      nom : [this.currentFan.nom, Validators.required],
      dateNaissance : [this.currentFan.dateNaissance, [Validators.required, AgeValid]],
      listeSerie : this.builder.array([])
    })

    this.currentFan.listeSerie.forEach(el => {
      this.getListeSeriesControl().push(new FormControl(el, Validators.required))
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

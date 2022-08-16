import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  liste : Fan[]
  constructor(
    private service : FanService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.liste = this.service.listeFan
  }

  suppression(index : number) {
    this.service.supprimer(index)
  }

  openMaj(index : number) {
    this.router.navigate(['maj', index])
  }

}

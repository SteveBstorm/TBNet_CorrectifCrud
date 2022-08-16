import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  listeFan : Fan[] = [{nom : "toto", dateNaissance : new Date(1212,12,12), listeSerie : []}]

  constructor(
    private router : Router
  ) { }

  ajout(newFan : Fan) : void {
    this.listeFan.push(newFan)
    this.router.navigate(['liste'])
  }

  supprimer(index : number) : void {
    this.listeFan.splice(index, 1)
    this.router.navigate(['liste'])
  }

  maj(majFan : Fan, index : number){
    this.router.navigate(['liste'])
    this.listeFan[index] = majFan
  }

  detail(index : number) : Fan{
    return this.listeFan[index]
  }
}

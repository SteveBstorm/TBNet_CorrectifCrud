import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentFan : Fan
  constructor(
    private fanService : FanService,
    private ar : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.ar.snapshot.params['id']
    this.currentFan = this.fanService.detail(id)
  }

}

import { MomentsService } from './../../../services/moments.service';
import { Component, OnInit } from '@angular/core';
import { Moments } from '../../../Moments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  allMoments: Moments[] = [];
  moments: Moments[] = [];
  baseApiUrl = 'http://localhost:3333/';

  constructor(private momentsService: MomentsService) {}

  ngOnInit(): void {
    this.momentsService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });
      this.allMoments = data;
      this.moments = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glop-list',
  template: `
    List :<br>
    <tr *ngFor="let glop of glopList">
      <td>{{glop.id}}</td>
      <td>{{glop.code}}</td>
    </tr>
    <app-glop-detail></app-glop-detail>
  `,
  styleUrls: []
})

export class GlopListComponent implements OnInit {

  glopList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadGlopList();
  }

  private loadGlopList(): void {
    this.glopList = [
      { "id": 1, "code": "KIT-001" },
      { "id": 2, "code": "KAT-001" }
    ]
  };
}

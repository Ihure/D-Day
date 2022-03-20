import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'madiro-hack-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @HostBinding('class') class = 'flex';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-dialog-for-table';
  data: number[] = [];

  ngOnInit() {
    for (let i = 1; i <= 128; i++) this.data.push(i);
  }
}

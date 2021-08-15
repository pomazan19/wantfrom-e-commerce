import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  serverElements = [{name: 'Jarra', price: 50, marca: 'Teleg'}, {name: 'Jarra', price: 50, marca: 'Teleg'}, {name: 'Jarra', price: 50, marca: 'Teleg'}]
  constructor() { }

  ngOnInit(): void {
  }

}

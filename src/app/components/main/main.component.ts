import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  serverElements = [{name: 'Botines', price: 50, marca: 'Nike'}, {name: 'Remera PSG', price: 50, marca: 'Jordan'}, {name: 'Pelota Futbol', price: 50, marca: 'Adidas'}]
  constructor() { }

  ngOnInit(): void {
  }

}

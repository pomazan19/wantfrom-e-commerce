import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  serverElements = [
    { nombre: 'Botines', precio: 9000, marca: 'Nike', id: 1, categoria: '12' },
    { nombre: 'Remera PSG', precio: 50000, marca: 'Jordan', id: 1, categoria: '12' },
    { nombre: 'Pelota Futbol', precio: 5000, marca: 'Adidas', id: 1, categoria: '12' },
    { nombre: 'Botines', precio: 9000, marca: 'Nike', id: 1, categoria: '12' },
    { nombre: 'Remera PSG', precio: 50000, marca: 'Jordan', id: 1, categoria: '12' }
  ];
  listaMostrar: Array<any> = []

  filterForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      precio: new FormControl(''),
      categoria: new FormControl(''),
      marca: new FormControl('')
    })
    this.listaMostrar = [...this.serverElements]
    this.filterForm.valueChanges.subscribe(() => {
      this.filterValues();
    });
  }

  filterValues() {
    this.listaMostrar = this.serverElements.filter(e => {
      return (e.nombre.toLowerCase().includes(this.filterForm.value.nombre.toLowerCase()) &&
        e.marca.toLowerCase().includes(this.filterForm.value.marca.toLowerCase()) &&
        e.categoria.toLowerCase().includes(this.filterForm.value.categoria.toLowerCase())
      )
    })
    if (this.filterForm.value.precio > 0) {
      this.listaMostrar = this.listaMostrar.filter(e => {
        return e.precio <= this.filterForm.value.precio
      })
    }
  }


  reset(): void {
    this.filterForm.patchValue({
      id: '',
      nombre: '',
      precio: '',
      categoria: '',
      marca: ''
    });
  }

}

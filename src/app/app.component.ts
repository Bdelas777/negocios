import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Declaracion
  title: string = 'negocios';
  nombreEmpresa: string = 'Pascual';
  anio: Number = 1945;
  // any es lo que sea
  otraEmpresa: any[] = ['Coca Cola', 'Pepsi', 'Seven Eleven'];
  cargando: boolean = false;
  empresas = [
    {
      nombre: 'Coca Cola',
      pais: 'Estados Unidos',
      fundacion: 1892,
    },
    {
      nombre: 'Pepsi',
      pais: 'Estados Unidos',
      fundacion: 1893,
    },
    {
      nombre: 'Ford',
      pais: 'Estados Unidos',
      fundacion: 1903,
    },
  ];
  empresas2 = {
    nombre: 'Coca cola',
    pais: 'Estados Unidos',
    fundacion: 1892,
  };
  empresas3 = {
    nombre: 'Coca cola',
    pais: 'Estados Unidos',
    fundacion: 1892,
  };
  constructor() {
    this.cargar();
  }
  cargar() {
    console.log(this.empresas);
  }
}

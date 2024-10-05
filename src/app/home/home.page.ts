import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Nombre: string;
  Mensaje: string;
  Relacion: string;
  Materias: string;

  constructor() { }

  getNombre() {
    this.Mensaje = "Bienvenido" + this.Nombre + "!" + "tu eres mi" + this.Relacion + " y estudias" + this.Materias;
  }

}

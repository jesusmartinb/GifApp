import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; // ! Non-null assertion operator es propio de typeScript

  constructor( private gifsService: GifsService ) {}

  buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0) {  // Para evitar las entradas vacias
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value= '';
  }

}

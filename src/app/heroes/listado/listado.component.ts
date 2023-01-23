import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Superman', 'Ironman', 'Spiderman', 'Hulk', 'Capitan América'];
  heroeBorrado: string = '';

  public borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

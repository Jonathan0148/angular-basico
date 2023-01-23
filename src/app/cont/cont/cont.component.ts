import { Component } from '@angular/core';

@Component ({
    selector: 'app-cont',
    templateUrl: './cont.component.html'
})
export class ContComponent {
    title: string = 'Contador App';
    number: number = 0;
    base: number = 5;
  
    public accumulate(value:number){
        this.number += value;
    }
}
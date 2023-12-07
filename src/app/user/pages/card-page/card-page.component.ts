import { Component } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent {

  public cantidad:number = 1;

  public sumCantidad=(val:string):void=>{
    if(val=="+")
      this.cantidad++;
    else
    this.cantidad--;
    console.log(this.cantidad)
  }

}

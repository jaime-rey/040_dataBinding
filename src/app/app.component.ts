import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataBinding';
  Libro = {
    "titulo":"Hamlet",
    "autor":"William Shakespeare",
    "precio":21.30,
    "stock":5,
    "cantidad":0,
    "imagen":"assets/old-books.jpg"
  };
  downCantidad(libro: { cantidad: number; }){
    if (libro.cantidad>0) {
      libro.cantidad--;
    }
  }
  upCantidad(libro: {cantidad: number; stock:number;}){
    if (libro.cantidad<libro.stock) libro.cantidad++;
  }
  getCoord(event: { clientX: number; clientY: number; }) { console.log(event.clientX + ", " + event.clientY); }
}

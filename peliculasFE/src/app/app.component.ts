import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [
        {
          titulo: 'Spider-man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 30.99,
        },
      ];
    }, 500);
  }

  title = 'Peliculas FE';

  peliculas;

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
